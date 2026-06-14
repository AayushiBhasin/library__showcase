# Library — Next.js + Plain CSS

A Next.js (Pages Router) JavaScript port of the Library Membership Manager showcase.

- **Framework:** Next.js 14 (JavaScript, no TypeScript)
- **Styling:** Plain CSS file (`styles/globals.css`) — no Tailwind, no runtime CSS-in-JS
- **Icons:** lucide-react

The `styles/globals.css` file is hand-shipped utility CSS that reproduces the
original design pixel-for-pixel. Edit it directly to tweak styles.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Project structure

```
pages/
  _app.js          Global CSS import
  _document.js     HTML shell + meta
  index.js         Showcase page (all sections + components)
styles/
  globals.css      The complete plain stylesheet
```
