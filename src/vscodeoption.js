
import inquirer from 'inquirer';
import { createSpinner } from 'nanospinner';
import { fetchData, sleep } from './common.js';

async function vsCode(choice) {
    if (choice === 'Vscode') {
        const vschoice = await inquirer.prompt({
            name: 'vs_choice',
            type: 'list',
            choices: ['Keyboard Shortcuts', 'Keymapping', 'Pref Json', 'Snippets'],
            default() {
                return 'Keyboard Shortcuts';
            }
        });
        let vs_choice = vschoice.vs_choice;
        const spinner = createSpinner('Loading VSCode...').start();
        await sleep();
        spinner.stop();

        if (vs_choice === 'Snippets') {
            let url =
                'https://raw.githubusercontent.com/sumeetmaharjan/VSCode-Angular-TypeScript-Snippets-Minimal/master/src/snippets.json';
            let settings = { method: 'GET' };

            fetchData(url, settings);
        } else if (vs_choice === 'Pref Json') {
        }
    }
}

export default vsCode;
