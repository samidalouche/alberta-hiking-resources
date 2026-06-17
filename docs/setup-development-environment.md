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

## AI assistant setup (MCP)

The project exposes a set of [Model Context Protocol](https://modelcontextprotocol.io)
servers that give an AI coding assistant accurate, up-to-date knowledge of Nuxt
and of this app specifically — so it writes correct code instead of relying on
stale training data.

> These servers are a **development aid** for the engineer working on the repo.
> They are unrelated to the runtime MCP server the site itself ships via
> `@nuxtjs/mcp-toolkit` (the tools under [server/mcp/](../server/mcp/)), which
> serves the published hiking content to end users.

### Available servers

| Server      | Transport      | Endpoint                          | What it gives the assistant                                                                 |
| ----------- | -------------- | --------------------------------- | ------------------------------------------------------------------------------------------- |
| `nuxt`      | SSE (local)    | `http://localhost:3000/__mcp/sse` | This running app's live structure: routes, components, auto-imports, resolved Nuxt config.  |
| `nuxt-docs` | HTTP (hosted)  | `https://nuxt.com/mcp`            | Current Nuxt 4 documentation, so answers track the version this project uses.               |
| `nuxt-ui`   | HTTP (hosted)  | `https://ui.nuxt.com/mcp`         | Nuxt UI component documentation (props, slots, usage).                                       |

The `nuxt` server is provided by the dev-only [`nuxt-mcp-dev`](https://github.com/antfu/nuxt-mcp)
module, registered in [nuxt.config.ts](../nuxt.config.ts). It is **only reachable
while the dev server is running** (`mise run dev`); the two hosted servers are
always available. `nuxt-mcp-dev` is excluded from the production build.

### Claude Code

Claude Code reads the project-scoped [.mcp.json](../.mcp.json) at the repo root.
No manual configuration is needed — just:

1. Run `mise run dev` so the local `nuxt` server is reachable.
2. Open the project in Claude Code (reload the window if it was already open) so
   it picks up `.mcp.json`.
3. Approve the three servers when Claude Code prompts to trust them (it always
   asks before using MCP servers defined in a project file).

Verify with `/mcp` inside Claude Code — all three should show as connected.

### VS Code (native / Copilot)

VS Code's built-in MCP support reads [.vscode/mcp.json](../.vscode/mcp.json),
which `nuxt-mcp-dev` keeps in sync automatically on each `mise run dev`. Enable
MCP in your VS Code settings, reload, and the same three servers are available
to Copilot's agent mode.

## Next steps

See [building-and-testing.md](building-and-testing.md) for the full `mise` task
reference plus build, lint, and CI details, and
[releasing-and-publishing.md](releasing-and-publishing.md) for the deployment
pipeline.
