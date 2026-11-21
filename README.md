# Lin Yone Computer Graphic

A bilingual (English and Myanmar) website for Lin Yone Computer Graphic & Printing Service in Yangon. It presents the studio, its print and design services, and ways to request a quote or get in touch.

## Features

- Responsive Hero, Services, About, and Contact sections.
- English and Myanmar language switching without a page reload.
- Six-item Services carousel with arrow navigation, drag and swipe support, and automatic rotation.
- Contact links for phone, Viber, Facebook, and the studio address.
- Locally hosted English and Myanmar fonts and brand imagery.
- Favicon and Apple touch icon using the existing Lin Yone eagle-star mark.

## Technology

- React 19
- TypeScript 7
- Vite 8
- CSS
- npm

## Requirements

- Node.js 24 or a Vite 8 compatible release.
- npm.

## Local development

```sh
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Production build

```sh
npm run build
npm run preview
```

The production site is written to `dist/`.

## Deployment

The project is configured for Vercel's Vite deployment flow:

- Framework preset: Vite
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: repository root

Connect the GitHub repository to Vercel and deploy the `main` branch to Production. Once connected, pushes to `main` can trigger deployments automatically.

## Repository

[tainsinmoe04/lin-yone-computer-graphic](https://github.com/tainsinmoe04/lin-yone-computer-graphic)
