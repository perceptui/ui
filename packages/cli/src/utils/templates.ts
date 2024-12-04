import Conf from "conf";

interface Template {
  name: string;
  repo: string;
  description: string;
}

const config = new Conf<{ templates: Template[] }>({
  projectName: "perceptui-cli",
  defaults: {
    templates: [
      
    ],
  },
});

export async function getTemplate(name: string): Promise<Template | undefined> {
  const templates = config.get("templates");
  return templates.find((t) => t.name === name);
}

export async function getAllTemplates(): Promise<Template[]> {
  return config.get("templates");
}

export async function addNewTemplate(template: Template): Promise<void> {
  const templates = config.get("templates");
  templates.push(template);
  config.set("templates", templates);
}