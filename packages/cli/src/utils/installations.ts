import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export async function installDependencies(projectPath: string): Promise<void> {
  try {
    await execAsync("npm install", { cwd: projectPath });
  } catch (error) {
    throw new Error(`Failed to install dependencies: ${error}`);
  }
}
