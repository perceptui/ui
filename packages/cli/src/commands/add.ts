import fs from "fs";
import path from "path";
import axios from "axios";
import chalk from "chalk";
import ora from 'ora';

enum ProjectType {
    REACT = "REACT",
    NEXT_JS = "NEXT_JS",
}

interface ProjectDetails {
    isReact: boolean;
    isNextJs: boolean;
    isNextAppSrcRouter: boolean;
    isNextAppRouter: boolean;
    isPageSrcRouter: boolean;
    isPageRouter: boolean;
}

type GetComponentTypes = {
    componentName: string;
    projectType: ProjectType;
};

const currentDir = process.cwd();

const getProjectDetails = (): ProjectDetails => {
    const packageJsonExists = fs.existsSync(
        path.join(currentDir, "package.json")
    );
    const reactExists =
        packageJsonExists &&
        fs.existsSync(path.join(currentDir, "node_modules", "react")) &&
        !fs.existsSync(path.join(currentDir, "node_modules", "next"));
    const nextJsExists =
        packageJsonExists &&
        fs.existsSync(path.join(currentDir, "node_modules", "next"));
    const nextAppSrcRouterExists = fs.existsSync(
        path.join(currentDir, "src", "app")
    );
    const nextAppRouterExists = fs.existsSync(path.join(currentDir, "app"));
    const pageSrcRouterExists = fs.existsSync(
        path.join(currentDir, "src", "pages")
    );
    const pageRouterExists = fs.existsSync(path.join(currentDir, "pages"));

    return {
        isReact: reactExists,
        isNextJs: nextJsExists,
        isNextAppSrcRouter: nextAppSrcRouterExists,
        isNextAppRouter: nextAppRouterExists,
        isPageSrcRouter: pageSrcRouterExists,
        isPageRouter: pageRouterExists,
    };
};

const folderExists = (uiFolderPath: string): boolean => {
    return fs.existsSync(uiFolderPath);
};

const writeToFile = (
    filePath: string,
    data: string,
    fileName: string
): void => {
    fs.writeFile(filePath, data, (err) => {
        if (err) {
            console.error("🚨 Error writing file:");
        } else {
            console.log(`✔ Created the component`);
        }
    });
};

const getComponent = async ({
    componentName,
    projectType,
}: GetComponentTypes): Promise<string> => {
    try {
        let repoUrl: string;
        let content: string;
        switch (projectType) {
            case ProjectType.REACT:
                repoUrl = `https://raw.githubusercontent.com/perceptui/ui/refs/heads/main/apps/lib/src/components/${componentName}.tsx`;
                break;
            case ProjectType.NEXT_JS:
                repoUrl = `https://raw.githubusercontent.com/perceptui/ui/refs/heads/main/apps/lib/src/components/${componentName}.tsx`;
                break;
            default:
                throw new Error("Unsupported project type");
        }
        const response = await axios.get(repoUrl, {
            headers: {
                Accept: "application/vnd.github.v3+json",
            },
        });
        if (response.status === 200) {
            content = response.data;
        } else {
            throw new Error(`Error fetching component: ${response.statusText}`);
        }
        return content;
    } catch (error) {
        throw new Error(`Failed to fetch component: ${(error as Error).message}`);
    }
}

// Helper function to create the UI folder and write the component
const createComponent = (
    basePath: string,
    componentName: string,
    data: string
) => {
    const uiFolderPath = path.join(basePath, "components/percept-ui");

    if (!folderExists(uiFolderPath)) {
        fs.mkdirSync(uiFolderPath, { recursive: true });
    }

    const filePath = path.join(uiFolderPath, `${componentName}.tsx`);
    writeToFile(filePath, data, `${componentName}.tsx`);
    console.log(chalk.green(`✔ Created the component`));
    return;
};

// Main function to handle the logic based on project type
const addComponent = async (componentName: string) => {
    try {
        const {
            isReact,
            isNextJs,
            isNextAppSrcRouter,
            isNextAppRouter,
            isPageSrcRouter,
            isPageRouter,
        } = getProjectDetails();

        const currentDir = process.cwd();

        // React project handling
        if (isReact) {
            let data = await getComponent({
                componentName,
                projectType: ProjectType.NEXT_JS,
            });
            console.log(`✅ React project detected.`);
            createComponent(path.join(currentDir, "src"), componentName, data);
        }
        // Next.js project handling
        else if (isNextJs) {
            console.log(`✅ Next.js project detected.`);

            if (isNextAppSrcRouter || isPageSrcRouter) {
                let data = await getComponent({
                    componentName,
                    projectType: ProjectType.NEXT_JS,
                });
                createComponent(path.join(currentDir, "src"), componentName, 'use client;' + data);
            } else if (isNextAppRouter || isPageRouter) {
                let data = await getComponent({
                    componentName,
                    projectType: ProjectType.NEXT_JS,
                });
                createComponent(currentDir, componentName, 'use client;' + data);
            }
        } else {
            console.log(chalk.red("❌ Project type not detected."));
            return;
        }
    } catch (err: any) {
        console.log(chalk.red(`❌ ${err.message}`));
        return;
    }
}

export const add = async (components: string[]) => {
    const detectSpinner = ora("Detecting project type...").start();
    detectSpinner.succeed("Project type detected.");

    const componentsList = [
        "alert", "avatar", "badge", "button", "checkbox", "input",
        "label", "link", "password-input", "radio", "slider",
        "spinner", "switch"
    ];

    if (components.length === 0) {
        console.log(chalk.red("No components provided"));
        return;
    }

    const spinner = ora("Creating components...").start();
    const notFoundComponents: string[] = [];

    for (const component of components) {
        if (componentsList.includes(component)) {
            try {
                await addComponent(component);
                spinner.succeed(chalk.green(`Component "${component}" added successfully.`));
            } catch (error) {
                const errorMessage = (error as Error).message;
                spinner.fail(chalk.red(`Failed to add component "${component}": ${errorMessage}`));
            }
        } else {
            notFoundComponents.push(component);
        }
    }

    if (notFoundComponents.length > 0) {
        spinner.fail(chalk.red(`Component(s) not found: ${notFoundComponents.join(", ")}`));
    } else {
        spinner.succeed(chalk.green("All components added successfully."));
    }
};