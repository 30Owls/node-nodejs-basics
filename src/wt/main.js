import os from 'os';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import {Worker} from 'worker_threads';

const workerPath = path.join(__dirname, 'worker.js')

export const performCalculations = async () => {
    
    const sysCPUNum = os.cpus().length;
    const arrOfWorkers = [];
    let number = 10;

    const theWorker = (number) =>  new Promise((resolve) => {

        const worker = new Worker(workerPath, {
            workerData: {numberIs : number} 
        });

        worker.on('message', msg =>{ 
            resolve (msg);
        });

        worker.on('error', err => {
            resolve({
                status: 'error',
                data: null
            });
        });
    });

    for (let i = 0; i < sysCPUNum; i++) {
        arrOfWorkers.push(theWorker(number + i));
    }

    const workersFeedback = await Promise.allSettled(arrOfWorkers)
        .then(
            value => value.map(element => element.value)
        );
    
    console.log(workersFeedback)
    return workersFeedback;

};

performCalculations();