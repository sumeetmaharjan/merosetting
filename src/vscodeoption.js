import inquirer from 'inquirer';
import { createSpinner } from 'nanospinner';
import { displayMessage, fetchData, sleep } from './common.js';

async function vsCode(choice) {
    if (choice === 'Vscode') {
        const vschoice = await inquirer.prompt({
            name: 'vs_choice',
            type: 'list',
            choices: ['Keyboard Shortcuts', 'Pref Json', 'Snippets'],
            default() {
                return 'Keyboard Shortcuts';
            }
        });
        let vs_choice = vschoice.vs_choice;
        const spinner = createSpinner('Loading VSCode...').start();
        await sleep();
        spinner.stop();

        switch (vs_choice) {
            case 'Snippets':
                let url =
                    'https://raw.githubusercontent.com/sumeetmaharjan/VSCode-Angular-TypeScript-Snippets-Minimal/master/src/snippets.json';
                let settings = { method: 'GET' };
                fetchData(url, settings);
                displayMessage('Visual Studio Code Snippets');
                break;
            case 'Pref Json':
                // let url =
                //     'https://raw.githubusercontent.com/sumeetmaharjan/VSCode-Angular-TypeScript-Snippets-Minimal/master/src/snippets.json';
                // let settings = { method: 'GET' };
                fetchData(url, settings);
                displayMessage('Visual Studio Code Pref');
                break;

            default:
                break;
        }
    }
}

export default vsCode;
