import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const compress = async () => {
    const fileToCompress = path.join(__dirname, 'files', 'fileToCompress.txt');
    const pathForGz = path.join(__dirname, 'files','archive.gz');
    const imputSream = fs.createReadStream(fileToCompress, 'utf-8');
    const outputStream = fs.createWriteStream(pathForGz);
    pipeline(
        imputSream,
        zlib.createGzip(),
        outputStream,
        err => {
            console.log(err)
        }
    );

};

compress();