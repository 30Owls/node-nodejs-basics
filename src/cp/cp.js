import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { stdin, stdout } from 'process';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import childProcess from 'child_process'
const args = process.argv.slice(2);
const childURL = path.join(__dirname, 'files', 'script.js');

export const spawnChildProcess = async (args) => {
    const childProc = childProcess.fork(childURL, args);
    childProc.send(args);

    

    // childProc.stdout.on('data', (data) => {
    //     stdout.write(data);
    // });

    childProc.on('message', (code) =>
        console.log(`Message to parent: ${code}`)
    );

    childProc.on('close', (code) =>
    console.log(`Child process exited. Code: ${code}`)
    );
};

spawnChildProcess(args)