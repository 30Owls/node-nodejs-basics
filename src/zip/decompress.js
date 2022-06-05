import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const decompress = async () => {
    const fileToDeCompress = path.join(__dirname, 'files', 'archive.gz');
    const decompressedFile = path.join(__dirname, 'files','fileToCompress.txt');

    const imputSream = fs.createReadStream(fileToDeCompress);
    const outputStream = fs.createWriteStream(decompressedFile);

    pipeline(
        imputSream,
        zlib.createUnzip(),
        outputStream,
        err => {
            console.log(err)
        }
    );
};

decompress();