import degit from "degit";
import chalk from "chalk";

export const cloneRepo = async (repo: string, dest: string) => {
  const emitter = degit(repo, {
    cache: false,
    force: true,
    verbose: true,
  });
  try {
    emitter.on("info", (info) => {
      if (info.code === "FILE_EXISTS") {
        console.log(chalk.yellowBright("Found the file..."));
      }
      if (info.code === "EXTRACTING") {
        console.log(chalk.magentaBright("Extracting files..."));
      }
      if (info.code === "SUCCESS") {
        console.log(chalk.green("Files extracted successfully"));
      }

    });
    emitter.on("warn", (warning) => {
      console.warn(warning.message);
    });
    await emitter.clone(dest);
  } catch (error) { }
  await emitter.clone(dest);
};
