# PerceptUI CLI

Percept CLI is a command-line tool for adding components to your project and initializing projects with predefined templates.

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

### list

Use the `list` command to list all available templates.

```bash copy
npx @perceptui/cli@latest list
```

You will be given a list of all available templates.

```tsx
Listing available templates...

Available templates:

- vite-react-tailwind
- vite-react-ts-tailwind
- vite-react-shadcn
- next-shadcn
```

#### Options

```tsx
Usage: percept-cli list [options]

List all available templates

Options:
  -h, --help  display help for command
```

### create

Use the `create` command to initialize configuration and dependencies for a new project.

The `create` command installs dependencies, configures your project with multiple frameworks to help you build faster.

```bash copy
npx @perceptui/cli@latest create <project-name>
```

You will be prompted to choose a template:

```txt showLineNumbers
? Select a template: ...
> vite-react-Tailwind
  vite-react-ts-Tailwind
  vite-react-shadcn
  next-shadcn
```

#### Options

```tsx
Usage: @perceptui/cli create [options] <project-name>

Create a new project from a template

Options:
  -t, --template <template>  Template to use
  -p, --path <path>          Path to create the project in (default: ".")
  -h, --help                 display help for command
```

### add

Use the `add` command to add components to your project.

```bash
npx @perceptui/cli@latest add [options] [components...]
```

Add a new component:

#### Options

```tsx
Usage: shadcn add [options] [components...]

add a component to your project

Arguments:
  components         the components to add.

Options:
  -h, --help  display help for command
```



### Contributing
We welcome contributions to improve the PerceptUI CLI. To contribute:

- Fork the repository.
- Create a feature branch.
- Submit a pull request.
