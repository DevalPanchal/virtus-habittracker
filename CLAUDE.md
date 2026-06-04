# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout — two unrelated parts

This repo contains two independent codebases that do **not** share a build, tooling, or import graph:

1. **`src/` — Vite + React 19 + TypeScript app.** This is the scaffolded Vite template (a counter demo in `src/App.tsx`), not yet the actual habit tracker. New product UI work in React belongs here.
2. **`vanilla-app/` — the "Virtus" marketing landing page.** A standalone static site (plain HTML/CSS/vanilla JS, zero dependencies, no build step). This is the real, finished product-facing artifact. It is *not* compiled by Vite and is not referenced from `src/`.

When asked to change "the app," determine which of these is meant — they are easy to confuse because only `vanilla-app/` reflects the actual Virtus product, while only `src/` is wired into npm/Vite.

## Commands (apply to the `src/` Vite app only)

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — type-check (`tsc -b`) then build for production
- `npm run lint` — ESLint over the repo
- `npm run preview` — preview the production build

There is no test runner configured. `vanilla-app/` has no commands — open its `index.html` directly in a browser (e.g. `open vanilla-app/index.html`).

## Build details that matter

- **React Compiler is enabled** via `@rolldown/plugin-babel` + `reactCompilerPreset()` in [vite.config.ts](vite.config.ts). It rewrites component code at build time, so avoid manual `useMemo`/`useCallback` patterns that fight the compiler, and expect dev/build to be somewhat slower.
- TypeScript uses project references: [tsconfig.json](tsconfig.json) → [tsconfig.app.json](tsconfig.app.json) (the `src` app, bundler resolution, `noEmit`) and [tsconfig.node.json](tsconfig.node.json) (Vite config). `noUnusedLocals`/`noUnusedParameters` are on.
- ESLint flat config ([eslint.config.js](eslint.config.js)) targets only `**/*.{ts,tsx}` — the `vanilla-app/` JS is not linted.

## `vanilla-app/` architecture

A self-improvement-as-RPG habit-tracker marketing site. Pages: [index.html](vanilla-app/index.html) (landing), [privacy.html](vanilla-app/privacy.html), [terms.html](vanilla-app/terms.html), all sharing [styles.css](vanilla-app/styles.css).

[app.js](vanilla-app/app.js) is an IIFE that only *enriches* presentation — nav blur, a randomized "live" heatmap, count-up numbers, animated bars, and gallery parallax. The core design principle (stated in its header comment): all must-be-final state is set on `DOMContentLoaded` (e.g. bar widths from `data-val`/`data-fill`, heatmap painted immediately), so the page is correct even if `requestAnimationFrame`/timers are throttled. It also honors `prefers-reduced-motion`. Preserve this "final-state-first, animation-as-enhancement" pattern when editing.
