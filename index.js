#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';
import * as fs from 'fs';
import vsCode from './src/vscodeoption.js';
import vsStudio from './src/vsoption.js';
import { sleep } from './src/common.js';

let choice;

console.log(chalk.green('Starting app in dev mode...'));

await sleep();
await main();
await vsCode(choice);
await vsStudio(choice);

printMessage();

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

function printMessage() {
    figlet(choice, (err, data) => {
        console.log(gradient.pastel.multiline(data) + '\n\n');
    });
}
