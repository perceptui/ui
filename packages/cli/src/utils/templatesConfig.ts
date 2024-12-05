import path from "path";
import fs from "fs/promises";

export async function setupTemplate(
  templateName: string,
  projectPath: string
): Promise<void> {
  switch (templateName) {
    case "vite-react-shadcn":
      await setupShadcnConfig(projectPath);
      break;
    case 'next-shadcn':
      await setupNextConfig(projectPath);
      break;
  }
}

async function setupShadcnConfig(projectPath: string): Promise<void> {
  // Add any specific configuration needed for shadcn/ui
  const componentsDir = path.join(projectPath, "src/components");
  await fs.mkdir(componentsDir, { recursive: true });
}

async function setupNextConfig(projectPath: string): Promise<void> {
  // Add any specific configuration needed for Next.js
  const pagesDir = path.join(projectPath, 'src/pages');
  await fs.mkdir(pagesDir, { recursive: true });
}