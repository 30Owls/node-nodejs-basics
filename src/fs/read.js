import fs from 'fs';

export const read = async () => {
    let fileToRead = './src/fs/files/fileToRead.txt'
    fs.readFile(fileToRead, 'utf-8', (err, data) => {
        if (err) {
            throw new Error('FS operation failed');
        }
        console.log(data);
    });
};

read();