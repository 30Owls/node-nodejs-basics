import { stdin, stdout } from 'process';
import { Transform, pipeline } from 'stream';

const readInput = stdin;
const writeOutput = stdout;

export const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, encoding, callback){
            const chunkToString = chunk.toString().trim();
            const reverseChunk = chunkToString.split('').reverse().join('');
            this.push(reverseChunk + '\n');
            callback();
        }
    });
    
    pipeline(
        readInput,
        transformStream,
        writeOutput,
        err => {
            console.log(err)
        }
    );
};

transform();