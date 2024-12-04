import degit from "degit";

export const cloneRepo = async (repo: string, dest: string) => {
  const emitter = degit(repo, {
    cache: false,
    force: true,
    verbose: true,
  });
  try {
    emitter.on("info", (info) => {
      console.log(info.message);
    });
    emitter.on("warn", (warning) => {
      console.warn(warning.message);
    });
    await emitter.clone(dest);
  } catch (error) {}
  await emitter.clone(dest);
};
