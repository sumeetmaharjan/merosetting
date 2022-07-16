#!/usr/bin/env node

import inquirer from 'inquirer';
import { createSpinner } from 'nanospinner';
import vsCode from './src/vscodeoption.js';
import vsStudio from './src/vsoption.js';
import { sleep } from './src/common.js';

let choice;

await sleep();
await main();
await vsCode(choice);
await vsStudio(choice);

async function main() {
    const answer = await inquirer.prompt({
        name: 'question',
        type: 'list',
        choices: ['Vscode', 'Visual Studio Code'],
        default() {
            return 'John Doe';
        }
    });
    choice = answer.question;
    loadSpinner(answer.question);
}

async function loadSpinner(value) {
    const spinner = createSpinner('Loading...').start();
    await sleep();

    if (value !== '') {
        spinner.success('Success!');
    } else {
        process.exit(1);
    }
}
