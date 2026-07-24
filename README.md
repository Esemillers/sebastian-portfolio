# Sebastian Miller Portfolio - Print Requests Update

This folder is a ready-to-publish prototype of the portfolio with clearer visual navigation and a new **Print Requests** section.

Because Codex could not access your full live site source files, use the `drop_in` folder if you want to preserve your current full image grid.

## What Changed

- Edited the navigation to include `Selected`, `Browse`, `Photography`, `Objects`, `Prints`, `About`, and `Contact`.
- Added a larger `Selected Work Candidates` section near the top of the page.
- Added visual browsing filters, including people, landscape, coast/water, street/community, nature/animals, night/light, architecture, abstract, furniture/objects, and drawings/process.
- Added object/material filters for `Wood` and `Ceramics`.
- Added a dedicated `Objects` section that brings furniture, wood, ceramics, interiors, and object studies together.
- Added all 177 reviewed images as candidate visual-category cards.
- Updated the typography toward a restrained fashion-house/studio direction with lighter grotesk headings, small uppercase navigation, and more whitespace.
- Updated the website language around a stronger professional concept: people, place, memory, identity, belonging, and objects as traces of lived experience.
- Added a `Print Requests` section.
- Added a Netlify-ready request form.
- Added a simple thank-you page: `print-request-sent.html`.
- Added a `Request this print` link inside the image preview.

## Important Curation Note

The visual categories are **candidate tags only**. They help with navigation and review, but they are not final project names, final classifications, or final portfolio selections.

Nothing here deletes, renames, moves, overwrites, or changes your original images.

Personal images and the removed chair-project concept were taken out of this website package only. The original archive files were not touched.

## Public Image Quality

This version uses newly generated web-quality image files in `assets/web_images/`.
They were created from the original submitted zip files and are separate copies for the website only.

The original source folders and original files were not renamed, moved, overwritten, deleted, or compressed.

## Current Public Direction

- The first screen introduces `Sebastian Miller` directly.
- Tiny `.jpg` archive names are used as quiet code-like decoration.
- The top buttons open one section at a time, so the site no longer feels like one long scroll-down page.
- Image sections use horizontal slide rails with `Prev` and `Next` controls instead of long vertical image walls.

## How It Works

Visitors can request a print before anything is produced.

The form asks for:

- name
- email
- image title
- preferred size
- paper preference
- shipping city/country
- message

The page clearly says that no print is made automatically. You confirm price, availability, and timeline first.

## Netlify Note

The form uses Netlify Forms:

```html
<form name="print-request" method="POST" action="/print-request-sent.html" data-netlify="true">
```

After publishing, enable/check Forms in your Netlify dashboard. Submissions should appear under the `print-request` form.

## Files

- `index.html`
- `styles.css`
- `script.js`
- `print-request-sent.html`

## Safest Way To Use This

Use the files in:

```text
drop_in/
```

Those contain:

- the HTML section to paste into your existing `index.html`
- the CSS to paste at the bottom of your existing `styles.css`
- the thank-you page to add beside your existing `index.html`

That keeps your current portfolio intact.

## Important

This is a print-request system, not a full store. It helps you collect interest before producing prints.
