import fs from 'fs';

export const remove = async () => {

    let srcFile = './src/fs/files/fileToRemove.txt'

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