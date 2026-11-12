# PureNest Cleaning Co. — React portfolio project

A responsive cleaning-service landing-page concept built to demonstrate frontend development skills. PureNest is a fictional brand; this project is not an operating cleaning business.

## Tech stack

- React 18
- JavaScript (ES6+)
- Vite 6
- HTML5 and custom CSS
- Lucide React
- Formspree (contact-form delivery)

## Features

- Responsive navigation and page layout
- Reusable React components and data-driven service/review cards
- Service, about, process, reviews and contact sections
- Accessible form labels, required fields and submission feedback
- Formspree integration through an environment variable
- SEO metadata, social-sharing metadata and custom SVG favicon

## Run locally

Requirements: Node.js 18+ and npm.

```bash
npm install
cp .env.example .env
npm run dev
```

Open the local URL printed by Vite.

## Configure Formspree

1. Create a form in your Formspree account.
2. Copy the form endpoint (the URL in the format `https://formspree.io/f/yourFormId`).
3. Open `.env` and replace the example value:

   ```env
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/yourFormId
   ```

4. Restart the Vite server after changing `.env`.
5. Submit a test enquiry and confirm it appears in the Formspree inbox. Check spam and any Formspree verification email if it does not arrive.

**Important:** `.env` is excluded from Git. Add the same `VITE_FORMSPREE_ENDPOINT` variable in Vercel → Project → Settings → Environment Variables, then redeploy. The endpoint is intended to be public client-side configuration; never put private API keys or passwords in a `VITE_` variable.

Until a real endpoint is configured, the form will show a setup message and will not claim that an enquiry was sent.

## Production build

```bash
npm run build
npm run preview
```

Vite outputs the production site to `dist/`.

## Deploy to Vercel

- Import the GitHub repository into Vercel.
- Framework preset: Vite.
- Build command: `npm run build`.
- Output directory: `dist`.
- Add `VITE_FORMSPREE_ENDPOINT` in Vercel Environment Variables.
- Deploy, then test the live contact form and mobile layout.

## Portfolio integrity

- Testimonials are illustrative placeholders, not verified customer reviews.
- The brand, service claims, and business details are fictional demonstration content.
- Do not present this concept as a real client project or claim real customer results.
- Replace placeholder content before adapting it for a real business.
