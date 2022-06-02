import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const list = async () => {
    const dirName = path.join(__dirname, 'files');
    
    fs.readdir(dirName, (err, files) => {
        if (err) {
            throw new Error('FS operation failed');
        }
        console.log(files);
    });
};

list();