# PureNest: beginner deployment checklist

This is a **fictional portfolio concept**, not a live cleaning business. Its contact form is a front-end demonstration; no email is sent and no data is stored.

## Run locally
1. Open this folder (the one containing package.json) in VS Code.
2. Run `npm install` then `npm run dev`.
3. Open the localhost address printed in the terminal.
4. Run `npm run build` to check production compilation.

## Publish with GitHub + Vercel
1. Create a GitHub repository named `purenest-cleaning-react`.
2. Upload the contents of this folder (package.json must be at repository root). Do not upload node_modules or dist.
3. At https://vercel.com/new sign in with GitHub and import the repository.
4. Select framework **Vite**, root directory `./`, build command `npm run build`, output directory `dist`.
5. Click Deploy, open the live URL and test on mobile and desktop.
6. In your portfolio HTML replace the local link with the real Vercel URL:

```html
<a href="https://YOUR-REAL-DEPLOYMENT.vercel.app/" target="_blank" rel="noopener noreferrer">Business Landing Page</a>
```

## Before making this a real business website
- Replace sample email/phone with verified business contact details; avoid publishing personal data without consent.
- Replace illustrative testimonials with genuine, approved reviews or remove them.
- Connect a secure, spam-protected form service or backend; configure privacy notices and test delivery before stating enquiries are sent.
- Verify all buttons, links, keyboard navigation, responsive layouts and accessibility.
- After changes, commit them to GitHub to trigger a new Vercel deployment.
