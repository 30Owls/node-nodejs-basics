export const parseArgs = () => {
    let argsString = '';

    for(let i = 2; i < ((process.argv).length); i=i+2){
        argsString+=`${(process.argv[i]).slice(2)} is ${process.argv[i+1]}, `;
    }

    console.log(argsString.slice(0, argsString.length - 2));
};

parseArgs();