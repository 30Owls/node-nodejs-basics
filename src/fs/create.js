import fs from 'fs';
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import path from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const create = async () => {
    fs.writeFile(path.join(__dirname, 'files', 'fresh.txt'), 'I am fresh and young',{flag: "wx"}, function (err) {
        if (err) throw new Error('FS operation failed');
    });
};

create();