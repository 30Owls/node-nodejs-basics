import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import moduleA from './files/a.json' assert { type: 'json' };
import moduleB from './files/b.json' assert { type: 'json' };
import moduleC from './files/c.js';

moduleC()


const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = moduleA
} else {
    unknownObject = moduleB
}
console.log(unknownObject)

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);



const createMyServer = createServerHttp((_, res) => {
    res.writeHead(200);
    res.end('Request accepted');
});
const HOST = 'localhost';
const PORT = 8080;
createMyServer.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});

export { unknownObject, createMyServer}
