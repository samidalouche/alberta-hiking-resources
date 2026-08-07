# Setup Development Environment

There are two ways to work on this site. A third — StackBlitz — does not
currently work; see [below](#stackblitz-does-not-currently-work) for why, so that
nobody has to rediscover it.

| | What it is | Setup | Can run |
|---|---|---|---|
| [Dev container](#dev-container-codespaces-codesandbox-local-docker) | A real Linux container | Sign in, a few minutes to build | Everything |
| [Local](#local-setup) | Your own machine | Install mise | Everything |
| [StackBlitz](#stackblitz-does-not-currently-work) | Node compiled to WebAssembly, in a browser tab | — | **Nothing — blocked** |

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
local Docker does not.

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

## StackBlitz (does not currently work)

[.stackblitzrc](../.stackblitzrc) is kept in the repo, but **StackBlitz cannot
build this project today.** The blocker is WebContainer's package manager, and it
is not something a change here can fix. This is written down so the investigation
does not have to be repeated.

StackBlitz does not run a container or a virtual machine. It runs a
reimplementation of Node.js, compiled to WebAssembly, inside the browser tab. That
is what makes it start in seconds with no account, and it is also why parts of the
Node platform are missing or only partly implemented.

What was tried, in order, on 2026-08-07 (WebContainer Node v22.22.3, bundled pnpm
8.15.6):

| Attempt | Result |
|---|---|
| The bundled pnpm 8.15.6 | `ERR_PNPM_INVALID_WORKSPACE_CONFIGURATION` — rejects [pnpm-workspace.yaml](../pnpm-workspace.yaml) for having no `packages:` field |
| corepack, which would honour `packageManager` | Not present in WebContainer |
| `npm i -g pnpm@11.15.1` | `EACCES` — no writable global prefix and no sudo |
| `npx pnpm@11.15.1` | `this.db.exec is not a function` — pnpm 11 backs its store index with `node:sqlite`, which WebContainer only partly implements |
| `npx pnpm@10` | Reads `packageManager` and self-upgrades to pnpm 11, then crashes inside StackBlitz's own injected `/home/.pnpm/.pnpmfile.cjs` |

The root cause is a version squeeze with nothing in the middle. `packages:` only
became optional in pnpm 10, and `allowBuilds` is pnpm 11, so **this repo needs
pnpm 10 or newer** — while the newest pnpm WebContainer can actually execute is
older than that. Nothing in between satisfies both.

Note that `packageManager: pnpm@11.15.1` in [package.json](../package.json) is
already set and does not help: WebContainer did not adopt it, and pnpm 10 honoured
it only by trying to upgrade itself into the version that cannot run.

Deliberately not worked around. Every fix would have to be applied on top of the
last, StackBlitz would end up running a different pnpm major than CI — so a green
result there would prove nothing — and no CI anywhere can test the arrangement.
Downgrading the project's own pnpm to suit it would mean giving up the workspace
settings and penalising the primary workflow for the optional one.

**Retest when** WebContainer ships a working `node:sqlite`, which would let
`npx pnpm@11` run and likely clears the whole chain at once. Check with
`npx --yes pnpm@11 install` in a StackBlitz terminal; if that succeeds, restore the
badge in [README.md](../README.md) and the entry on the in-site
[contributing page](../content/1.getting-started/2.contributing.md).

For context on the native dependencies, which were *not* the blocker: Nuxt and its
modules already detect this environment on their own — `std-env` reports the
`stackblitz` provider, `@nuxt/content` swaps `better-sqlite3` for the `sqlite3`
connector, and `nuxt-og-image` swaps `@takumi-rs/core` for its WebAssembly build.
That is why [nuxt.config.ts](../nuxt.config.ts) has no StackBlitz-specific
branches, and it should stay that way; if something ever does need overriding,
prefer `provider` from `std-env` over hand-rolled detection.

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
