import chalk from "chalk";
import fetch from "node-fetch";

interface Template {
  name: string;
  repo: string;
  description: string;
}

/**
 * Retrieve a specific template by name
 * @param name - Name of the template
 * @returns The template or undefined if not found
 */

export const getTemplate = async (name: string) => {
  try {
    const response = await fetch(`https://templates-api-otor.onrender.com/template/${name}`);

    if (!response.ok) {
      const error = await response.json(); // Parse error response
      console.log(chalk.red((error as any).message || "Failed to fetch the template."));
      return null; // Return null if the fetch fails
    }

    const template = await response.json() as Template; // Parse successful response
    return template;
  } catch (error) {
    if (error instanceof Error) {
      console.log(chalk.red("An error occurred while fetching the template:"), error.message);
    } else {
      console.log(chalk.red("An unknown error occurred while fetching the template."));
    }
    return null; // Return null in case of any unexpected errors
  }
};

/**
 * Retrieve all available templates
 * @returns An array of templates
 */
export const getTemplates = async () => {
  try {
    const response = await fetch("https://templates-api-otor.onrender.com/templates");

    if (!response.ok) {
      console.log(chalk.red("Failed to fetch templates from the registry."));
      return [];
    }

    const templates = await response.json() as Template[];
    return templates;
  } catch (error) {
    console.log(chalk.red("An error occurred while fetching templates:"), error);
    return [];
  }
};

/**
 * Add a new template to the registry
 * @param template - The template to add
 */
// export async function addNewTemplate(template: Template): Promise<void> {
//   const templates = config.get("templates") || [];

//   // Ensure the template doesn't already exist
//   if (templates.find((t) => t.name === template.name)) {
//     console.error(`Template with name '${template.name}' already exists.`);
//     return;
//   }

//   templates.push(template);
//   config.set("templates", templates);
//   console.log(`Template '${template.name}' added successfully.`);
// }
