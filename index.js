#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';
import clipboardy from 'clipboardy';
import path from 'path';
import * as fs from 'fs';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let choice;
let vs_choice;

console.log(chalk.green('Starting app in dev mode...'));

await sleep();
await main();
await vsCode();
await vsStudio();

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

async function vsCode() {
    if (choice === 'Vscode') {
        const vschoice = await inquirer.prompt({
            name: 'vs_choice',
            type: 'list',
            choices: ['Keyboard Shortcuts', 'Keymapping', 'Pref Json', 'Snippets'],
            default() {
                return 'Keyboard Shortcuts';
            }
        });
        vs_choice = vschoice.vs_choice;
        const spinner = createSpinner('Loading VSCode...').start();
        await sleep();
        spinner.stop();
        fs.readFile('./vssnippets.json', 'utf8', (err, data) => {
            clipboardy.writeSync(data);
        });
    }
}

async function vsStudio() {
    if (choice === 'Visual Studio Code') {
    }
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
