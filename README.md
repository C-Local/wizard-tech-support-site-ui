# CLAN WebDev — Wizard-Themed Tech Support Site

A full-stack, single-page React application for a fictional technology consultancy, "CLAN WebDev," themed around wizards and magic. Built from scratch as a portfolio project, it pairs a themed multi-page front end with a Firebase/Firestore backend for form submissions.

Visitors can browse the company's pages, interact with a themed support chatbot, submit a contact request that persists to a database, and — if they discover a hidden element on the site — reveal a secret job-application page.

## Features

- **Client-side routing** across five views (Home, Contact, About Us, a hidden Apply page, and a 404 page) using React Router.
- **Two database-backed forms** — a contact form and a job-application form — that validate input, show live status feedback, and write submissions to Firestore.
- **Reusable form component** — both forms are rendered from a single configurable `Form` component, driven by field definitions passed as props, rather than duplicated markup.
- **Five-state submission feedback** — each form communicates its state to the user: an initial greeting, a live typing greeting, a "submitting" indicator during the network write, a success message, a validation-rejection message (missing fields), and a failure message (network/write error).
- **Firestore security rules** — server-side rules that allow only validated document creation (enforcing exact field sets, string types, and size limits) while denying reads, updates, and deletes to the public.
- **Hidden page reveal** — a discoverable easter egg (a clickable element in the footer) reveals a secret Apply page, coordinated across components using React Context.
- **Themed support chatbot** ("Wizzly") that responds with a scripted eight-message sequence, then disables its own input once the conversation limit is reached.
- **Animated hero image** on the home page with hover glow and a click-to-flip animation.
- **Responsive design** — a collapsing hamburger menu on narrow screens, with the mobile menu and chat panel handled so only one is open at a time.

## Tech Stack

- **React** (with StrictMode) — UI and component state
- **Vite** — build tooling and dev server with HMR
- **React Router** (`react-router-dom`) — client-side routing
- **Firebase / Firestore** — backend database for form submissions
- **Font Awesome** — icons (hamburger menu)
- **Plain CSS** — one stylesheet per component, with shared color variables defined in `index.css`
- **ESLint** — linting

## Project Structure

```
src/
├── assets/              Images (logo, hero art, team photo, hat)
├── lib/
│   └── firebase.js      Firebase initialization (app, Firestore, Auth)
├── components/          Shared, site-wide components
│   ├── App/             Root component; router, layout, and hidden-page Context
│   ├── Header/          Fixed nav bar, responsive menu, and chatbot panel
│   ├── Footer/          Copyright line and the hidden-page trigger
│   └── Form/            Reusable, config-driven form component
├── pages/               Route-level views
│   ├── Home/            Landing page with animated hero
│   ├── Contact/         Contact form (configures the Form component)
│   ├── About/           Company description
│   ├── Apply/           Hidden job-application form (configures the Form component)
│   └── Error/           404 / not-found page
├── index.css            Global resets and shared CSS variables
└── main.jsx             App entry point
```

## Routes

| Path         | Page      | Description                                        |
| ------------ | --------- | -------------------------------------------------- |
| `/`          | Home      | Landing page with animated hero art                |
| `/contact`   | Contact   | Contact form that writes to Firestore              |
| `/about-us`  | About Us  | Company description and team image                 |
| `/apply`     | Apply     | Hidden application form (revealed via the easter egg) |
| `*`          | Error     | 404 page for any unmatched route                   |

## Getting Started

**Prerequisites:** [Node.js](https://nodejs.org/) installed, and a [Firebase](https://firebase.google.com/) project with Firestore enabled.

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

This project reads its Firebase configuration and Firestore collection names from environment variables. Copy the provided template and fill in your own values:

```bash
cp .env.dist .env
```

Then edit `.env` with the values from your Firebase project:

```
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_FIREBASE_CONTACT_FORM_COLLECTION=your-contact-collection-name
VITE_FIREBASE_APPLY_FORM_COLLECTION=your-application-collection-name
```

The two collection variables are the names of the Firestore collections the contact form and application form write to. Create matching collections in your Firebase project, and make sure your security rules reference these same names.

### 3. Run the development server

```bash
npm run dev
```

Open the local URL shown in the terminal (typically `http://localhost:5173`).

### Other scripts

```bash
npm run build      # Production build
npm run preview    # Preview the production build locally
```

## Firestore Security Rules

The forms write to Firestore under security rules that permit only validated document creation. For each collection, creation is allowed only when the incoming document contains exactly the expected fields, each field is a string, and text lengths are within set limits. Reads, updates, and deletes are denied to the public by default (submitted data is viewable only through the Firebase console by the project owner). The rules' collection `match` paths must match the collection names configured in your `.env`.

## Notes

- The **chatbot** is a front-end demonstration with hard-coded, scripted replies — it does not use a language model or reach a real support system.
- The **hidden Apply page** is an easter egg, not a security boundary: the `/apply` route is reachable directly by URL. The "hidden" behavior only controls whether the navigation link is shown.
- On successful submission, each form also logs the submitted data to the browser console as a temporary stand-in for a future user-facing "review your submission" view.

## Author

**Christian Lanier** — CLAN WebDev
