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
const displayMessage = (message) => {
    figlet(message, (err, data) => {
        console.log(gradient.pastel.multiline(data) + '\n\n');
    });
};
export { sleep, fetchData, displayMessage };
