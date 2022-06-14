export const parseEnv = () => {
    let rssEnv = '';
    for (const [key, value] of Object.entries(process.env)) {
        key.match(/^RSS_/) ? rssEnv += `${key}=${value}; ` : false
    }
    console.log(rssEnv.slice(0, rssEnv.length - 2))
};

parseEnv();