import { Command } from 'commander';
import * as fs from 'fs';
import * as path from 'path';
import * as exec from 'child_process';

// Initialize the commander program
const program = new Command();

// CLI version and description
program.version('0.0.1').description('Percept UI CLI - Initialize your projects with templates');

// Create command to initialize a project with a specific template
program
  .command('create <template> <project-name>')
  .description('Create a new project with the specified template')
  .action((template, projectName) => {
    console.log(`Creating project "${projectName}" using "${template}" template...`);

    const projectPath = path.resolve(process.cwd(), projectName);

    // Check if the project already exists
    if (fs.existsSync(projectPath)) {
      console.error('Project already exists. Please choose a different name.');
      return;
    }

    // Initialize the project based on the template
    switch (template) {
      case 'react-tailwind':
        createReactTailwindProject(projectName);
        break;
      case 'next-tailwind':
        createNextTailwindProject(projectName);
        break;
      default:
        console.error('Unknown template:', template);
        break;
    }
  });

// Function to initialize a React + Tailwind project
function createReactTailwindProject(projectName: string) {
  console.log(`Setting up React project with Tailwind CSS...`);

  const projectPath = path.resolve(process.cwd(), projectName);

  exec.execSync(`npx create-react-app ${projectName}`, { stdio: 'inherit' });
  exec.execSync(`cd ${projectName} && npm install tailwindcss postcss autoprefixer && npx tailwindcss init`, { stdio: 'inherit' });

  // Modify the Tailwind config and other settings as needed
  const tailwindConfig = path.join(projectPath, 'tailwind.config.js');
  const postcssConfig = path.join(projectPath, 'postcss.config.js');

  fs.writeFileSync(
    tailwindConfig,
    `module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}`
  );

  fs.writeFileSync(
    postcssConfig,
    `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`
  );

  console.log('React + Tailwind project setup complete!');
}

// Function to initialize a Next.js + Tailwind project
function createNextTailwindProject(projectName: string) {
  console.log(`Setting up Next.js project with Tailwind CSS...`);

  const projectPath = path.resolve(process.cwd(), projectName);

  exec.execSync(`npx create-next-app@latest ${projectName} --typescript`, { stdio: 'inherit' });
  exec.execSync(`cd ${projectName} && npm install tailwindcss postcss autoprefixer && npx tailwindcss init`, { stdio: 'inherit' });

  // Modify the Tailwind config and other settings as needed
  const tailwindConfig = path.join(projectPath, 'tailwind.config.js');
  const postcssConfig = path.join(projectPath, 'postcss.config.js');

  fs.writeFileSync(
    tailwindConfig,
    `module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}`
  );

  fs.writeFileSync(
    postcssConfig,
    `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`
  );

  console.log('Next.js + Tailwind project setup complete!');
}

// Parse the command line arguments
program.parse(process.argv);
