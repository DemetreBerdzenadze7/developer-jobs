# Developer Jobs

A polished React job board for browsing software development opportunities, filtering listings by title and location, and viewing individual job details in a responsive, dark-mode-friendly interface.

This project was built to match a Frontend Mentor-style challenge experience while delivering a clean, modern UI and a solid React architecture for a portfolio-ready implementation.

## Overview

Developer Jobs is a front-end application for exploring software engineering roles from a static dataset. It presents a searchable list of open positions with company metadata, location, contract type, and role summaries, then allows users to open a dedicated detail page with a full job description and responsibilities.

The interface emphasizes clarity and usability: a compact filter bar, a mobile filter modal, a light/dark theme toggle, and responsive layouts across mobile, tablet, and desktop breakpoints. The app is implemented with React, TypeScript, and Tailwind CSS, with routing handled by React Router.

## Features

- Responsive job listing grid with company logo cards and role metadata
- Search and filter by job title and location
- Full-time-only toggle for narrowing listings
- Mobile-specific filter panel for compact layouts
- Dynamic routing for individual job pages using `/job/:id`
- Detailed job view with company information, requirements, role description, and call-to-action section
- Light and dark theme toggle with persisted preference using `localStorage`
- Clean, reusable state management via a custom `JobsContext`
- Static JSON-backed job data model for fast iteration and easy expansion

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Radix UI Switch primitive
- Geist Variable font
- ESLint + TypeScript build tooling

## Project Structure

```text
src/
├── components/
│   ├── header/
│   ├── main/
│   │   ├── input-section/
│   │   └── jobs/
│   │       └── job-page-section/
│   └── ui/
├── container/
├── context/
│   └── JobsContext.tsx
├── data/
│   └── data.json
├── layout/
│   └── Layout.tsx
├── pages/
│   ├── Job.tsx
│   └── Jobs.tsx
├── index.css
├── main.tsx
└── ...
public/
├── images/
│   ├── desktop/
│   ├── mobile/
│   ├── tablet/
│   └── logos/
└── ...
```

Key implementation notes:

- `src/data/data.json` contains the dataset used for all jobs and job detail pages.
- `src/context/JobsContext.tsx` centralizes filters, theme state, and UI interactions.
- `src/pages/Jobs.tsx` renders the main job board experience.
- `src/pages/Job.tsx` resolves a dynamic route and renders the selected listing details.
- `src/components/main/input-section/` handles title/location filtering and the mobile filter modal.
- `src/components/main/jobs/` renders the listing cards and associated sections.
- `src/components/header/Header.tsx` contains the theme switch and header branding.

## How It Works

The application starts in `main.tsx`, where a React Router configuration defines the two main routes:

- `/` renders the main job listing page
- `/job/:id` renders the selected job detail page

State is managed with a context provider in `JobsContext.tsx`. The provider stores:

- the active title filter,
- the location filter,
- a full-time toggle,
- the mobile filter modal visibility state,
- and the current light/dark theme.

The job list is built from `src/data/data.json`, and filtering happens client-side in the listing components. When the user interacts with the search inputs or the full-time checkbox, the visible results update immediately.

Each job card links to its individual detail page using the job id. The detail page reads the route parameter and matches it against the static dataset to render the appropriate role information, company context, responsibilities, and requirements.

The theme state is synchronized with the document root so the user-visible dark mode is applied consistently across the application and saved in `localStorage` for persistence.

## Responsive Design

The UI is designed to adapt to multiple screen sizes using the project’s Tailwind-based layout system and breakpoint-specific classes.

- Mobile layouts prioritize a compact filter bar and a modal-based location filter.
- Tablet layouts expand the card grid to a 2-column arrangement.
- Desktop layouts increase the listing density to a 3-column grid and provide more horizontal spacing.
- Header artwork and backgrounds swap between mobile, tablet, and desktop SVG patterns.
- Job detail sections and footer blocks also adapt spacing and alignment across breakpoints.

The responsive behavior is implemented directly in component classes rather than through external UI libraries, keeping the layout lightweight and aligned with the design system used in the project.

## Getting Started

### Prerequisites

- Node.js
- npm

### Install dependencies

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal, typically:

```bash
http://localhost:5173
```

No environment variables are required for this project.

## Build

To create a production build:

```bash
npm run build
```

This runs TypeScript checks and then generates the optimized production bundle with Vite.

For local preview of the production build:

```bash
npm run preview
```

## Live Demo

Live demo not configured in the project files. Replace this placeholder with your deployment URL when available.

```text
https://your-live-demo-url.com
```

## Frontend Mentor

This project follows the structure and style of a Frontend Mentor challenge, but the official challenge URL is not included in the repository files. Add the correct challenge link here when you have the final URL.

```text
https://www.frontendmentor.io/your-challenge-link
```

## Author

Demetre Berdzenadze

GitHub: https://github.com/DemetreBerdzenadze7
