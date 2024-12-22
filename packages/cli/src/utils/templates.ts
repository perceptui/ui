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

const templates = [
  {
    name: "vite-react-tailwind",
    repo: "github:perceptui/vite-react-tailwind-template",
    description: "Vite + React + Tailwind CSS starter template",
  },
  {
    name: "vite-react-ts-tailwind",
    repo: "github:perceptui/vite-react-ts-tailwind-template",
    description: "Vite + React + TS + Tailwind CSS starter template",
  },
  {
    name: "vite-react-shadcn",
    repo: "github:perceptui/vite-react-shadcn-template",
    description: "Vite + React + ShadcnUI starter template",
  },
  {
    name: "next-shadcn",
    repo: "github:perceptui/next-shadcn-template",
    description: "Next.js + ShadcnUI starter template",
  },
];

export const getTemplate = async (name: string) => {
  try {
    const template = templates.find((t) => t.name === name);
    if (!template) {
      console.log(chalk.red(`Template '${name}' not found.`));
      return null;
    }
    return template;
  } catch (error) {
    console.log(chalk.red(`An error occurred while fetching template '${name}':`), error);
    return null;
  }
};

/**
 * Retrieve all available templates
 * @returns An array of templates
 */
export const getTemplates = async () => {
  try {
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
