import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const rename = async () => {
    let srcFile = path.join(__dirname, 'files', 'wrongFilename.txt');
    let destFile = path.join(__dirname, 'files', 'properFilename.md');

    fs.access(srcFile, fs.constants.F_OK, (err) => {
        if(err){
            throw new Error('FS operation failed');
        }
        fs.access(destFile, fs.constants.F_OK, (err) => {
            if(!err){
                throw new Error('FS operation failed');
            }
            fs.rename(srcFile, destFile, function(err) {
                if ( err ) console.log('ERROR: ' + err);
            });
        });      
    });
};

rename();