import { program } from "commander";
import chalk from "chalk";
import { list } from "./commands/list.js";
import updateNotifier from "update-notifier";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readFileSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packageJson = JSON.parse(
  readFileSync(join(__dirname, "..", "package.json"), "utf-8")
);

updateNotifier({ pkg: packageJson }).notify();
console.log(chalk.green("Welcome to PerceptUI CLI"));
console.log(chalk.green("Version: " + packageJson.version));
program
  .name("@perceptui/create")
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
  .option("-p, --path <path>", "Path to create the project in", ".");

program
  .command("list")
  .description("List all available templates")
  .action(list);

program
  .command("add")
  .description("Add a new template")
  .option("-n, --name <name>", "Template name")
  .option("-r, --repo <repo>", "GitHub repository URL")
  .option("-d, --description <description>", "Template description");

program.parse();
