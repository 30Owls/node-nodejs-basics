import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const remove = async () => {
    
    let srcFile = path.join(__dirname, 'files', 'fileToRemove.txt');

    fs.unlink(srcFile, (err) => {
        if (err) {
            if (err.code === 'ENOENT'){
                throw new Error('FS operation failed');
            }
            throw err;
        }
    });
};

remove();