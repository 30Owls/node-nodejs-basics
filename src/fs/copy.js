import fs from 'fs';
import { fileURLToPath } from 'url'
import path from 'path'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const copy = async () => {
    let srcDir = path.join(__dirname, 'files');
    let targetDir = path.join(__dirname, 'files_copy');
    
    fs.access(srcDir, (err) => {
        //if there is no srcDir - throw err
        if(err){
            throw new Error('FS operation failed');
        }
        fs.access(targetDir, (err) => {
            //if there is no targetDir -> err -> create targetDir
            if(err){
                fs.cp(srcDir, targetDir, { recursive: true }, (err) => {
                    if (err) {
                        console.error(err);
                    }
                });
            }
            // fs.access sees "files_copy" -> throw err
            else {
                throw new Error('FS operation failed');
            }
        });
    });
};

copy();