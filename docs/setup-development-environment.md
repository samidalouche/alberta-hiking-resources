# Setup Development Environment

## Prerequisites

1. Install [mise](https://mise.jdx.dev/getting-started.html) — it pins the Node and
   pnpm versions ([mise.toml](../mise.toml)) and acts as the task runner.

## Install and run

1. Install the toolchain and dependencies:

    ```bash
    mise install
    mise run install
    ```

2. Start the development server:

    ```bash
    mise run dev
    ```

   The site is served at `http://localhost:3000`.

## Editor setup

### VS Code

- [Vue (Volar) extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Available tasks

The `mise` tasks wrap the underlying `pnpm` scripts:

| Task                  | Description                              |
| --------------------- | ---------------------------------------- |
| `mise run install`    | Install dependencies (frozen lockfile)   |
| `mise run dev`        | Start the Nuxt dev server                |
| `mise run lint`       | Lint with ESLint                         |
| `mise run typecheck`  | Run the Nuxt type check                  |
| `mise run build`      | Build the Nuxt application               |
| `mise run preview`    | Preview the production build             |
| `mise run ci`         | Run the full CI pipeline locally         |
| `mise run update`     | Update all dependencies to latest        |

See [building-and-testing.md](building-and-testing.md) for build, lint, and CI
details, and [releasing-and-publishing.md](releasing-and-publishing.md) for the
deployment pipeline.
