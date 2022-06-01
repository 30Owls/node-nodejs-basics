import fs from 'fs';

export const list = async () => {
    const dirName = './src/fs/files'
    fs.readdir(dirName, (err, files) => {
        if (err) {
            throw new Error('FS operation failed');
        }
        console.log(files);
    });
};

list();