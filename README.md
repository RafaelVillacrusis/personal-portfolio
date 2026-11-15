# Rafael Villacrusis | Portfolio

Personal portfolio of **Rafael M. Villacrusis**, a 3rd-year BSIT student at Gordon College, aspiring web developer, and musician.

Built with **React**, **Vite**, **Tailwind CSS**, and **React Router**, and deployed on **Vercel**.

## Pages

| Route       | Page                                                   |
| ----------- | ------------------------------------------------------ |
| `/`         | Home: name, role, short intro, featured project        |
| `/about`    | About: story, education, achievements, skills, music   |
| `/projects` | Projects: each project shown with the same ProjectCard |
| `/contact`  | Contact: email and social links, plus a contact form   |
| any other   | 404 Not Found page                                     |

## Folder structure

```
src/
├── assets/images/    Photos and project screenshots (optimized .webp)
├── components/       Reusable pieces: Header, Footer, Layout, ProjectCard, Button, ContactForm...
├── data/             All content: profile.js (personal info, skills, links) and projects.js
├── hooks/            usePageTitle: sets the browser tab title on each page
├── pages/            One file per route: Home, About, Projects, Contact, NotFound
├── App.jsx           Route definitions
├── main.jsx          App entry point (wraps the app in BrowserRouter)
└── index.css         Tailwind import and the design tokens (colors and fonts)
```

To update text, skills, links, or projects, edit only the files in `src/data/`.

## Run it locally

```bash
npm install
npm run dev
```

Then open the link shown in the terminal (usually http://localhost:5173).

## Features

- Mobile-first, responsive layout for phones, tablets, and desktops
- Mobile menu (closes with the Escape key or after choosing a page)
- Shared Header and Footer on every page, with the current page highlighted
- 404 page for any URL that doesn't exist
- Contact form with validation and clear success and error messages
- Animations (UI/UX):
  - Page transition: each page fades in when you switch pages
  - Staggered hero entrance: badge, name, role, intro, buttons, and photo appear one after another
  - Scroll reveal: sections fade up as they scroll into view (`src/components/Reveal.jsx`)
  - Hover feedback on buttons, project cards, tags, social links, and photos; buttons press down when clicked
  - Animated mobile menu and floating 404 number
  - Respects the device's "reduce motion" setting: all animations turn off for users who need that
- Accessibility: alt text on all images, a "Skip to content" link, visible keyboard focus, labeled form fields, and color contrast that passes WCAG AA
- Custom favicon and a different tab title for each page
- `vercel.json` rewrite, so refreshing or opening `/about` directly works on the live site

## Contact form (optional setup)

The form works right away: it opens the visitor's email app with the message filled in.
To have messages sent straight to Gmail instead:

1. Create a free account at https://formspree.io and create a new form.
2. Copy the form ID (the part after `/f/`, for example `xyzabcd`).
3. In Vercel, open **Project → Settings → Environment Variables**, add `VITE_FORMSPREE_ID` with that ID, and redeploy.
