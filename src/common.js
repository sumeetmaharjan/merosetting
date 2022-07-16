import fetch from 'node-fetch';
import clipboardy from 'clipboardy';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchData = (url, setting) => {
    fetch(url, setting)
        .then((res) => res.json())
        .then((data) => {
            clipboardy.writeSync(JSON.stringify(data));
        })
        .catch((err) => console.log('fetch error', err));
};

export { sleep, fetchData };
