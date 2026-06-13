// Prerenders each app route to a real static HTML file so GitHub Pages serves
// them with a 200 (instead of the 404.html SPA fallback). Runs after the
// client build (`dist/`) and the SSR build (`dist-ssr/`).
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

// App-relative route -> output file within dist/.
const routes = {
  '/': 'index.html',
  '/privacy': 'privacy/index.html',
  '/terms': 'terms/index.html',
}

const template = readFileSync(resolve(root, 'dist/index.html'), 'utf-8')
const { render } = await import(
  pathToFileURL(resolve(root, 'dist-ssr/entry-server.js')).href
)

const marker = '<div id="root"></div>'
if (!template.includes(marker)) {
  throw new Error(`prerender: could not find "${marker}" in dist/index.html`)
}

for (const [path, file] of Object.entries(routes)) {
  const html = template.replace(marker, `<div id="root">${render(path)}</div>`)
  const out = resolve(root, 'dist', file)
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, html)
  console.log(`prerendered ${path} -> dist/${file}`)
}
