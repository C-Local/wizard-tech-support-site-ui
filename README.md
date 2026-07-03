# CLAN WebDev — Wizard-Themed Agency Site

A single-page React application for a fictional technology consultancy, "CLAN WebDev," themed around wizards and magic. Built from scratch as a front-end portfolio project.

Visitors can browse the company's pages, interact with a themed (non-functional) support chatbot, and fill out a contact form that echoes their input back to them.

## Features

- **Client-side routing** across four views (Home, Contact, About Us, and a 404 page) using React Router.
- **Fixed navigation header** with a logo, page links, and a toggleable chatbot panel.
- **Themed support chatbot** ("Wizzly") that responds with a scripted eight-message sequence, then disables its own input once the conversation limit is reached.
- **Contact form** that greets the user live as they type their first name and confirms submission, logging the collected fields to the browser console.
- **Animated hero image** on the home page with hover glow and a click-to-flip animation.
- **Responsive layout** that hides the logo and shrinks navigation text on narrow screens.

## Tech Stack

- **React** (with StrictMode)
- **Vite** — build tooling and dev server with HMR
- **React Router** (`react-router-dom`) — client-side routing
- **Plain CSS** — one stylesheet per component, with shared color variables defined in `index.css`
- **ESLint** — linting

## Project Structure

```
src/
├── assets/              Images (logo, hero art, team photo)
├── components/          Shared, site-wide components
│   ├── App/             Root component; sets up the router and layout
│   ├── Header/          Fixed nav bar and chatbot panel
│   └── Footer/          Copyright line with dynamic year
├── pages/               Route-level views
│   ├── Home/            Landing page with animated hero
│   ├── Contact/         Contact form
│   ├── About/           Company description
│   └── Error/           404 / not-found page
├── index.css            Global resets and shared CSS variables
└── main.jsx             App entry point
```

Each component lives in its own folder alongside its stylesheet (e.g. `Header/Header.jsx` + `Header/Header.css`).

## Routes

| Path         | Page      | Description                          |
| ------------ | --------- | ------------------------------------ |
| `/`          | Home      | Landing page with animated hero art  |
| `/contact`   | Contact   | Contact form with live greeting      |
| `/about-us`  | About Us  | Company description and team image   |
| `*`          | Error     | 404 page for any unmatched route     |

## Getting Started

**Prerequisites:** [Node.js](https://nodejs.org/) installed.

```bash
# Install dependencies
npm install

# Start the development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

After running `npm run dev`, open the local URL shown in the terminal (typically `http://localhost:5173`).

## Notes

- The **chatbot** and **contact form** are front-end demonstrations only. There is no backend: chatbot replies are hard-coded, and submitted form data is logged to the browser console rather than sent anywhere.
- Color values are centralized as CSS custom properties (variables) in `index.css` and referenced throughout the component stylesheets.

## Author

**Christian Lanier** — CLAN WebDev
