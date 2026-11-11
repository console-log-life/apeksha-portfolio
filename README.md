# Apeksha Jain — Portfolio

A premium, motion-rich personal portfolio for **Apeksha Jain**, Integrated B.Tech–M.Tech (IT) student at **ABV-IIITM, Gwalior** and full-stack developer.

Built by merging two portfolio builds into one: the data-driven React + Three.js foundation, plus an achievements grid and 3D tilt project cards, with all content (education, experience, skills, achievements, contact) sourced from the latest resume.

## Tech stack

- **React 18** + **Vite**
- **Tailwind CSS** for styling (custom glass-panel + aurora design system)
- **React Three Fiber** + **Drei** + **Three.js** — interactive 3D skills globe (Fibonacci sphere)
- **Framer Motion** — page/scroll animations + 3D tilt project cards
- **GSAP** + ScrollTrigger — scroll-reveal choreography
- **EmailJS** — working contact form (optional keys)
- **React Icons** — brand + UI icons

## Sections

Hero · About · Skills (3D globe) · Experience · Education · Projects · Achievements · Contact

## Getting started

```bash
npm install
npm run dev      # http://localhost:8080
npm run build    # production build -> dist/
npm run preview  # preview the build
```

## Customise

- **All content** lives in one file: `src/data/portfolio.js` (name, intro, skills, experience, education, projects, achievements, contact, social links).
- **Resume** is served from `public/resume.pdf`. Replace that file to update the download.
- **Project images**: drop into `public/` and reference via the `image` field in `projects`.
- **Contact form**: to send real emails, create a `.env` from `.env.example` and add your EmailJS keys. Without keys, the form gracefully falls back to a `mailto:` link.

## Notes

- Primary email is set to `apekshaj8805@gmail.com` (from the resume). To switch it, edit `portfolioMeta.email`, `socialLinks`, and `contactChannels` in `src/data/portfolio.js`.
- The **Projects** section is intentionally curated separately from the resume's project list.
