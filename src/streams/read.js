import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
    let fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');
    const stream = fs.createReadStream(fileToRead, 'utf-8');
    stream.on('data', chunk => process.stdout.write(chunk + '\n'));
};

read();