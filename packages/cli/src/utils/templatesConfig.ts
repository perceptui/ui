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
  }
}

async function setupShadcnConfig(projectPath: string): Promise<void> {
  // Add any specific configuration needed for shadcn/ui
  const componentsDir = path.join(projectPath, "src/components");
  await fs.mkdir(componentsDir, { recursive: true });
}
