import fs from 'fs';

export const rename = async () => {
    let srcFile = './src/fs/files/wrongFilename.txt';
    let destFile = './src/fs/files/properFilename.md';

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