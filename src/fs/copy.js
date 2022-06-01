import fs from 'fs';

export const copy = async () => {
    let srcDir = './src/fs/files';
    let targetDir = './src/fs/files_copy';
    fs.access(srcDir, (err) => {
        if(err){
            throw new Error('FS operation failed');
        }
        fs.access(targetDir, (err) => {
            if(err){
                fs.cp(srcDir, targetDir, { recursive: true }, (err) => {
                    if (err) {
                        console.error(err);
                    }
                });
            }
            else {
                throw new Error('FS operation failed');
            }
        });
    });
};

copy();