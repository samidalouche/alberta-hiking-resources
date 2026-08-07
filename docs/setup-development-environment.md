# Setup Development Environment

There are three ways to work on this site. If you only want to fix a typo or add
an entry to a content page, start with StackBlitz and skip the rest.

| | What it is | Setup | Can run |
|---|---|---|---|
| [StackBlitz](#stackblitz-no-setup) | Node compiled to WebAssembly, in a browser tab | One click, no account | Dev server; edit and preview content |
| [Dev container](#dev-container-codespaces-codesandbox-local-docker) | A real Linux container | Sign in, a few minutes to build | Everything |
| [Local](#local-setup) | Your own machine | Install mise | Everything |

## StackBlitz (no setup)

**[Open this project in StackBlitz →](https://stackblitz.com/github/samidalouche/alberta-hiking-resources)**

It boots the repo, installs dependencies, and starts the dev server with a live
preview beside the editor. No account, no install, nothing to clean up
afterwards. To contribute a change, use StackBlitz's *Fork* then *Create a Pull
Request* buttons.

Configuration lives in [.stackblitzrc](../.stackblitzrc).

### How it copes with native dependencies

StackBlitz does not run a container or a virtual machine. It runs a
reimplementation of Node.js, compiled to WebAssembly, inside the browser tab
itself. That is what makes it start in seconds without an account — and it is
also why native `.node` addons cannot be loaded: there is no dynamic linker to
load them into. This project depends on several, and none of them needed
handling here, because the toolchain already detects the environment:

- `std-env` reports the runtime as the `stackblitz` provider, and Nuxt, Nitro and
  the modules below all key off it.
- **better-sqlite3**, the SQLite driver behind `@nuxt/content`, is swapped for
  the `sqlite3` connector that StackBlitz implements natively. Nuxt skips its
  usual "may I install this?" prompt under StackBlitz, so that happens unattended.
- **@takumi-rs/core**, the renderer behind `nuxt-og-image`, is swapped for its
  WebAssembly build — the module carries a compatibility profile for the
  `stackblitz` and `codesandbox` providers.

That is why [nuxt.config.ts](../nuxt.config.ts) contains no StackBlitz-specific
branches: adding any would mean overriding decisions the modules already make
correctly, and would make what a contributor sees in StackBlitz differ from what
everyone else sees. If something does turn out to need overriding, prefer
`provider` from `std-env` over hand-rolled detection, so it agrees with the rest
of the stack.

Treat StackBlitz as the place to edit content and preview it, and the dev
container as the place to verify a change. A full `pnpm build` in a browser tab
is at best slow and memory-hungry, and is not something CI or anyone else
exercises, so do not rely on it passing there — `mise run ci` in the dev
container is the check that matters.

## Dev container (Codespaces, CodeSandbox, local Docker)

**[Open in GitHub Codespaces →](https://codespaces.new/samidalouche/alberta-hiking-resources)**
· **[Open in CodeSandbox →](https://codesandbox.io/p/github/samidalouche/alberta-hiking-resources/main)**

A full Linux container defined by
[.devcontainer/devcontainer.json](../.devcontainer/devcontainer.json), so every
native dependency compiles and the whole `mise run ci` pipeline — build, lint,
typecheck — runs exactly as it does locally and in CI.

It installs mise and then defers to [mise.toml](../mise.toml) and
[mise.lock](../mise.lock) for the Node and pnpm versions, so it resolves the same
toolchain a local checkout does rather than pinning a second copy that could
drift. Provisioning is in [.devcontainer/setup.sh](../.devcontainer/setup.sh).

Once it finishes building, the dev server starts with `mise run dev` and port
3000 is forwarded automatically.

The same file also works with the VS Code
[Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
extension against local Docker — *Dev Containers: Reopen in Container*. Note that
Codespaces bills compute against *your* GitHub account's monthly free quota;
local Docker and StackBlitz do not.

## Local setup

### Prerequisites

1. Install [mise](https://mise.jdx.dev/getting-started.html) — it pins the Node and
   pnpm versions ([mise.toml](../mise.toml)) and acts as the task runner.

### Install and run

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

The extensions worth having — MDC syntax for `content/`, Vue (Volar), ESLint, and
mise — are declared in the repo rather than listed here, so there is no
hand-maintained copy to fall out of date. They live in two files, which do
different things:

| File | Effect |
|---|---|
| [.vscode/extensions.json](../.vscode/extensions.json) | **Recommends.** VS Code shows a "this workspace has recommended extensions" prompt. Nothing is installed, and the prompt can be dismissed permanently. |
| [.devcontainer/devcontainer.json](../.devcontainer/devcontainer.json) (`customizations.vscode.extensions`) | **Installs.** Anything listed is installed automatically when the container is created. |

An extension appearing in both is not redundant: the first suggests it to someone
working locally, the second guarantees it inside the container.

Both files list the same four extensions, and the container still needs its own
copy, because a dev container splits the editor in half. The UI runs on your
machine, but language servers and linters run *inside* the container, since that
is where the source and `node_modules` are — and extensions installed on your
machine do not follow you across that boundary. A recommendation would not help
there either, as there is nobody present to accept the prompt while the container
is being created. Without the install list, a fresh container gives you an editor
with no Vue intelligence, no ESLint feedback, and no MDC highlighting in
`content/`.

Keep the two lists in step when changing either.

This applies to the dev container only. StackBlitz has its own editor and ignores
both files.

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
