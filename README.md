# Pandion Labs website

This is the repo to build and deploy the Pandion Labs (https://pandionlabs.dev) website.

# Guide for normal people

## Steps to get started the very first time

### 1. Download Git

Download and install [GitHub Desktop](https://desktop.github.com/download/) from [here](https://desktop.github.com/download/)

If you have any issues, visit [this page](https://docs.github.com/en/desktop/installing-and-authenticating-to-github-desktop/installing-github-desktop) for help.

### 2. Sign into Github

Follow [these instructions](https://docs.github.com/en/desktop/overview/getting-started-with-github-desktop) to connect GitHub Desktop to your GitHub account (just do Part 1, not Part 2 or 3)

### 3. Install Vs Code

Install [Visual Studio Code](https://code.visualstudio.com/download) from [here](https://code.visualstudio.com/download)

you also need to install the dev containers extensions. On the sidebar on the left click on the extensions icon and search for `devcontainers` (is from Microsoft) and install the extension.

### 4. Clone repository

Open VsCode and open the command palette by pressing `CMD + SHIFT + P` and type `Git: Clone` and press enter. Paste the following URL in the prompt: `https://github.com/pandionlabs/pandionlabs.dev`.
Then need to select the folder where you want the code to live.

## Run (Steps you do every time)

### 1. Start local website

open the project inside VsCode and press `CMD + SHIFT + P` and type `Dev Containers: Reopen in Container` and press enter.

If this is the first time you do this it needs to install a lot of stuff and you may need to restart your computer, but it should guide you through the process on its own.

### 2. Make your edits

This is the fun part! Edit any file in the website and see a live preview of the result at [http://localhost:4321](http://localhost:4321)

### 3. Commit your changes

Use the git panel in VsCode to select your changes and commit them.

### 4. Push your changes to a Pull Request (PR)

Use the git panel in VsCode to push your changes to the remote repository.

### 5. Merge the PR into main

After another person has reviewed your changes and approved them, you can merge the PR into the main branch. This means that the changes will automatically be deployed to the **live** website.

### For Nerds

## Npm usage

summary of main commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |

# How is this done?

## astro

We use [Astro](https://astro.build) as our static site generator. It's a fast, lightweight, and flexible framework that allows us to build content centered websites but also to add any interactions as needed.

## Accessible Astro

We use the [Accessible Astro Starter](https://github.com/incluud/accessible-astro-starter) starting theme: Fully accessible starter for kickstarting Astro projects, with Tailwind.

This also uses [Accessible Astro Components](https://github.com/incluud/accessible-astro-components/).

Learn more about the project at [Accessible Astro Docs](https://github.com/incluud/accessible-astro-docs): Comprehensive documentation for all Accessible Astro projects.
