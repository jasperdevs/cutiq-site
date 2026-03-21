# CutIQ Site

Static marketing site and legal pages for CutIQ, built with AppView and prepared for GitHub Pages or any static host.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static export is written to `out/`.

## Notes

- Replace `APP_ID` in `src/constants.ts` once App Store Connect shows the real Apple ID.
- Update `SITE_URL` in `app/(main)/layout.tsx` if you host the site on a different domain or subdomain.
- The site currently uses `support@cutiq.app`, `/privacy`, and `/terms`.
