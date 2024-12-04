import chalk from 'chalk';
import ora from 'ora';
import { getTemplate } from '../utils/templates.js';
import { cloneRepo } from '../utils/cloneRepo.js';
import pkg from 'enquirer';
import { installDependencies } from '../utils/installations.js';
import { setupTemplate } from '../utils/templatesConfig.js';

interface CreateOptions {
    template?: string;
    path?: string;
}

const { prompt } = pkg;
export async function createProject(projectName: string, options: CreateOptions) {
    try {
        // If template is not provided, show template selection prompt
        if (!options.template) {
            const response = await prompt<{ template: string }>({
                type: 'select',
                name: 'template',
                message: 'Select a template:',
                choices: [
                    { name: 'next-shadcn', message: 'Next.js + ShadcnUI' },
                    { name: 'vite-react-tailwind', message: 'Vite + React + Tailwind' },
                ]
            });
            options.template = response.template;
        }

        const spinner = ora('Creating project...').start();

        const template = await getTemplate(options.template);
        if (!template) {
            spinner.fail(chalk.red(`Template ${options.template} not found`));
            return;
        }

        // Clone the template
        await cloneRepo(template.repo, projectName);
        spinner.succeed(chalk.green('Project created successfully'));

        // Install dependencies
        spinner.start('Installing dependencies...');
        await installDependencies(projectName);
        spinner.succeed(chalk.green('Dependencies installed'));

        // Setup template-specific configurations
        spinner.start('Setting up project...');
        await setupTemplate(template.name, projectName);
        spinner.succeed(chalk.green('Project setup completed'));

        console.log('\n' + chalk.green('✨ Project is ready!'));
        console.log('\nNext steps:');
        console.log(chalk.cyan(`  cd ${projectName}`));
        console.log(chalk.cyan('  npm run dev'));

    } catch (error) {
        console.error(chalk.red('Error creating project:'), error);
        process.exit(1);
    }
}