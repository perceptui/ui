#!/usr/bin/env node
import { program } from "commander";
import chalk from "chalk";
import { list } from "./commands/list.js";
import updateNotifier from "update-notifier";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readFileSync } from "fs";
import { createProject } from "./commands/create.js";
import ora from "ora";
import { add } from "./commands/add.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packageJsonPath = join(__dirname, "..", "package.json");
const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"));

updateNotifier({ pkg: packageJson }).notify();

console.log(chalk.green("Welcome to PerceptUI CLI"));
console.log(chalk.green("Version: " + packageJson.version));

program
  .name("percept-cli")
  .description(
    chalk.magenta(
      "CLI tool for initializing projects with predefined templates"
    )
  )
  .version(packageJson.version);

program
  .command("create <project-name>")
  .description("Create a new project from a template")
  .option("-t, --template <template>", "Template to use")
  .option("-p, --path <path>", "Path to create the project in", ".")
  .action(createProject)

program
  .command("list")
  .description("List all available templates")
  .action(list);

program
  .command("add")
  .description("Add a new component")
  .argument("[component...]", "the components to add")
  .action(async (components: string[]) => {
    ora("Detecting project type...").start();
    await add(components);
  });

program.parse(process.argv);
