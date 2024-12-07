import chalk from "chalk";
import Conf from "conf";
import fetch from "node-fetch";

interface Template {
  name: string;
  repo: string;
  description: string;
}

export const getTemplates = async () => {
  try {
    const response = await fetch("https://templates-api-otor.onrender.com/templates");

    if (!response.ok) {
      console.log(chalk.red("Failed to fetch templates from the registry."));
      return [];
    }

    const templates = await response.json() as Template[];

    // Iterate through the array
    templates.forEach((template: { name: string; repo: string; description: string }) => {
      console.log(`Name: ${template.name}`);
      console.log(`Repo: ${template.repo}`);
      console.log(`Description: ${template.description}`);
      console.log('---');
    });

    return templates;
  } catch (error) {
    console.log(chalk.red("An error occurred while fetching templates:"), error);
    return [];
  }
};

export const getTemplate = async (name: string) => {
  const template = await fetch(`https://templates-api-otor.onrender.com/templates/${name}`);
  if (!template.ok) {
    console.log(chalk.red(`Failed to fetch template '${name}' from the registry.`));
  }
  return template.json;
}
// const config = new Conf<{ templates: Template[] }>({
//   projectName: "percept-cli",
//   defaults: {
//     templates: [
//       {
//         name: "vite-react-tailwind",
//         repo: "github:perceptui/vite-react-tailwind-template",
//         description: "Vite + React + Tailwind CSS starter template",
//       },
//       {
//         name: "vite-react-ts-tailwind",
//         repo: "github:perceptui/vite-react-ts-tailwind-template",
//         description: "Vite + React + TS + Tailwind CSS starter template",
//       },
//       {
//         name: "vite-react-shadcn",
//         repo: "github:perceptui/vite-react-shadcn-template",
//         description: "Vite + React + ShadcnUI starter template",
//       },
//       {
//         name: "next-shadcn",
//         repo: "github:perceptui/next-shadcn-template",
//         description: "Next.js + ShadcnUI starter template",
//       },
//     ],
//   },
// });


/**
 * Retrieve a specific template by name
 * @param name - Name of the template
 * @returns The template or undefined if not found
 */
// export async function getTemplate(name: string): Promise<Template | undefined> {
//   const templates = config.get("templates");

//   if (!templates || templates.length === 0) {
//     console.error("No templates found in configuration.");
//     return undefined;
//   }

//   const template = templates.find((t) => t.name === name);
//   if (!template) {
//     console.error(`Template with name '${name}' not found.`);
//   }

//   return template;
// }

/**
 * Retrieve all available templates
 * @returns An array of templates
 */
// export async function getAllTemplates(): Promise<Template[]> {
//   const templates = config.get("templates");

//   console.log("Retrieved templates from configuration:", templates);

//   if (!templates || templates.length === 0) {
//     console.error("No templates available in the registry.");
//     return [];
//   }

//   return templates;
// }

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
