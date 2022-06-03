import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import crypto from 'crypto'

export const calculateHash = async () => {

    let fileToHash = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

    fs.readFile(fileToHash, 'utf-8', (err, data) => {
        if (err) {
            throw new Error('FS operation failed');
        }
        let hashed = crypto.createHash('sha256').update(fileToHash).digest('hex');
        console.log(hashed)
        return hashed
    });

};

calculateHash();