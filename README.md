# Swiggy Clone

A full-stack Swiggy food delivery clone built with React 18, Tailwind CSS, and an Express proxy server. Fully functional offline with mock data fallbacks.
https://swiggybysingh.onrender.com/
---

## Features

- **Home page** — restaurant listing with infinite scroll (8 at a time), shimmer loading
- **Search** — live suggestions, restaurant and dish results
- **Restaurant menu** — full menu with item categories, add to cart
- **Cart** — add/remove items, quantity control
- **Offers** — browse and copy coupon codes
- **Help** — support categories and issues
- **Location picker** — change delivery location, persisted in localStorage
- **Filter & Sort** — sort by relevance, rating, delivery time, cost; filter by cuisine, rating, delivery time, pure veg
- **Offline-first** — all pages work without internet using mock data fallbacks
- **Responsive** — works on mobile, tablet, and desktop

---

## Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React 18, React Router DOM v6 |
| Styling | Tailwind CSS |
| Bundler | Parcel v2 |
| Backend | Express.js (proxy server) |
| Data | Swiggy API (live) + JSON mocks (offline fallback) |

---

## Project Structure

```
├── server.js              # Express proxy server + static file serving
├── src/
│   ├── app.jsx            # Root component, router, global state
│   ├── components/
│   │   ├── header/        # Header, location bar
│   │   ├── footer/        # Footer
│   │   └── body/          # All pages and UI components
│   ├── utils/             # Custom hooks, context, helpers
│   ├── mocks/             # Offline fallback JSON data
│   └── config.jsx         # Shared constants (API URLs)
├── netlify.toml           # Netlify config (if deploying frontend separately)
└── package.json
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/HarshneetSingh/Swiggy-clone.git
cd Swiggy-clone
npm install
```

### Run locally

You need two terminals:

**Terminal 1 — Proxy server**
```bash
npm run server
```

**Terminal 2 — Frontend**
```bash
npm start
```

Open [http://localhost:1234](http://localhost:1234)

> The proxy server runs on port 3000 and fetches live data from Swiggy's API. If it's not running, the app automatically falls back to mock data.

---

## How the Offline Fallback Works

Every API call has a 3-layer fallback:

| Layer | What happens |
|---|---|
| 1. Live API | Fetches fresh data from Swiggy |
| 2. Disk/localStorage cache | Uses previously fetched data |
| 3. Mock JSON files | Ships with 28 restaurants, 90+ search results, full menus |

The app never shows a blank screen — even with no internet.

## Author

**Harshneet Singh**  
[GitHub](https://github.com/HarshneetSingh)
