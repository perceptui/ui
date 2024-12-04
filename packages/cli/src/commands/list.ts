import chalk from "chalk";
import { getAllTemplates } from "../utils/templates.js";

export const list = async () => {
  console.log(chalk.bold("\nListing available templates...\n"));

  try {
    const templates = await getAllTemplates();
    if (!templates || templates.length === 0) {
      console.log(chalk.red("No templates found."));
      process.exit(1);
    }
    console.log(chalk.green("\nAvailable templates:\n"));

    templates.forEach((template) => {
      console.log(chalk.cyan(template.name));
    });

  } catch (error) {
    console.error(chalk.red("An error occurred while fetching templates:"), error);
  }
};
