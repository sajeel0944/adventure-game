#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from "chalk";


console.log(chalk.bold.bgYellow.blackBright("\n\t\twellcome to Advence game\n"));

console.log(chalk.blue("\t\t your fees amount is $ 20\n\n"))

let g_1 = await inquirer.prompt({
  name: "g_2",
  type: "number",
  message:chalk.blueBright ("inter your fees = $"),
});

if (g_1.g_2 === 20) {
  let enemies = await inquirer.prompt([
    {
      name: "ss",
      type: "list",
      message:chalk.yellowBright("\n select your player name \n"),
      choices:["skeleten", "zombie", "woldior", "Assain"],
    },
  ]);

  let gameRunnimg = true;

  Game: while (gameRunnimg) {

    let he_ro =chalk.magentaBright (enemies.ss);

    let option = await inquirer.prompt([
      {
        name: "ans",
        type: "list",
        message: chalk.yellowBright("\nwhat would you like to do ?\n"),
        choices:[ "1.Attak", "2.had and til","game infornmation"],
      },
    ]);

    if (option.ans === "1.Attak") {

      let enemy_1 = 100;
      let hero_1 = 100;

      let name:string=chalk.redBright("enemy")

      let enemy_2 = Math.floor(Math.random() * enemy_1);
      let hero = Math.floor(Math.random() * hero_1);

      console.log(chalk.blueBright(`\n${name} vs ${he_ro}`));
      console.log(chalk.blueBright(`${name} health is ${chalk.greenBright(enemy_1)} and ${he_ro} health is ${chalk.yellowBright(hero_1)}`));

      if (enemy_2 < hero) {
        console.log(chalk.blue(`${he_ro} has win this game`));

      } else if (hero < enemy_2) {
        console.log(chalk.redBright(`${name} has win this game`));
      }

      console.log(chalk.blue(`remain ${name} health is ${chalk.greenBright(enemy_2)} and ${he_ro} health ${chalk.yellowBright(hero)}`));

    } else if (option.ans === "2.had and til") {

      let h_t = await inquirer.prompt(
        {
          name: "t_h",
          type: "list",
          message:chalk.blueBright("select option\n"),
          choices: ["had", "tell"],
        },
       );

      if (h_t.t_h === "had") {

        let had = Math.floor(Math.random() * 9 + 1);
        let til = Math.floor(Math.random() * 9 + 1);

        if (had > til) {
          console.log(chalk.blueBright(`\n${chalk.magentaBright("had")} is win`));
        } else {
          console.log(chalk.redBright(`\n${chalk.magentaBright("had")} is fail`));
        }

      } else if (h_t.t_h === "tell") {

        let had = Math.floor(Math.random() * 9 + 1);
        let til = Math.floor(Math.random() * 9 + 1);

        if (had < til) {
          console.log(chalk.blue(`\n${chalk.yellowBright("tell")} is win`));
        } else {
          console.log(chalk.red(`\n${chalk.yellowBright("tell")} is fail`));
        }
      }
    }else if (option.ans === "game infornmation") {

      console.log("-".repeat(35));
      console.log(chalk.blueBright.bold("\t\tattack"));
      console.log("-".repeat(35));
      console.log(chalk.blueBright(`my palyer name is ${he_ro}`));
      console.log("-".repeat(35));
      console.log(chalk.blueBright.bold("\t\trun "));
      console.log("-".repeat(35));
      console.log(chalk.blueBright("this is had and tell game"));

    } 

    let useroption = await inquirer.prompt({
      name: "ans",
      type: "list",
      message:chalk.blueBright("\nwhat would you like to do now"),
      choices: ["1. continue", "2. Exit"],
    });

    if (useroption.ans === "1. continue") {
      console.log(chalk.blueBright(`\nyou are continue this game\n`));

    } else if (useroption.ans === "2. Exit") {
      console.log(chalk.blueBright("\nyou successful Exit"));
      break;
    }
  }
} else {
  console.log(chalk.red("\ninter your fees amount "));
}




