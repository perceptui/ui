# PerceptUI CLI

Percept CLI is a command-line tool for initializing projects with predefined templates. It simplifies the setup process by providing ready-to-use starter templates, allowing developers to focus on building applications instead of spending time on configuration.

## Features
- **Predefined Templates:** Choose from a variety of starter templates for popular frameworks like Vite, React, Tailwind CSS, and more.
- **Customizable:** Add your own templates to the registry for future use.
- **Fast Setup:** Initialize projects with a single command.
- **Version Updates:** Automatically notifies you about CLI updates.

## Installation
Install the CLI globally using `npm`:
```bash copy
npm install -g @perceptui/cli  
```

Or run without installation:
```bash copy
npx @perceptui/cli
```

## Usage

### Commands
1. **Initialize a project:**
Create a new project with specific template:
```bash
percept-cli create <project-name> --template <template-name> [--path <path>]  
```

- `project-name`: Name of the project.
- `--template, -t`: Name of the template to use.
- `--path, -p`: Optional path where the project should be created (default: current directory).

```bash copy
percept-cli create my-app --template vite-react-tailwind  
```

2. **List Available Templates:**
Display all predefined templates:

```bash copy
percept-cli list  
```

3. **Add a New Template:**

> Coming soon...

### Templates
#### Predefined Templates
The CLI comes with the following templates by default:

- **vite-react-tailwind**
  - Description: Vite + React + Tailwind CSS starter template.
  - Repository: vite-react-tailwind-template


### Contributing
We welcome contributions to improve the PerceptUI CLI. To contribute:

- Fork the repository.
- Create a feature branch.
- Submit a pull request.
