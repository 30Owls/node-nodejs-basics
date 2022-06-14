import fs from 'fs';
import { stdin } from 'process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const write = async () => {
    let fileToWrite = path.join(__dirname, 'files', 'fileToWrite.txt');
    const output = fs.createWriteStream(fileToWrite);
    stdin.on('data', chunk => output.write(chunk));
    stdin.on('error', error => console.log('Error', error.message));
};

write();