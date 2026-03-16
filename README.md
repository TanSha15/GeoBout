# World Explorer — React Country App

**Live Demo:** [[Click here](https://geobout.netlify.app/)]

A modern, responsive web application built with React that lets users explore countries around the world — search, filter by region, view detailed country information, and discover fascinating facts from every corner of the globe.

---

## Features

- **Hero Landing Page** — Engaging entry point with a call-to-action to start exploring
- **About / Facts Page** — Curated interesting facts for countries loaded from a local JSON file
- **Country Browser** — Browse all countries fetched from the REST Countries API
- **Search & Filter** — Search countries by name and filter by geographic region in real time
- **Country Detail Page** — Deep-dive into a country: flag, native names, population, region, sub-region, capital, TLD, currencies, and languages
- **Contact Form** — Functional contact form with controlled inputs and form reset on submit
- **Custom Error Page** — User-friendly error boundary with a "Go Back" option

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | Core UI library |
| [React Router v6](https://reactrouter.com/) | Client-side routing and nested layouts |
| [REST Countries API](https://restcountries.com/) | Live country data |
| `useTransition` | Non-blocking async data fetching |
| `useState` / `useEffect` | Local state and side effects |
| Plain CSS | Component-level styling |
| React Icons | Icon library |

---

## Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# 2. Navigate into the project
cd your-repo-name

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be running at `http://localhost:5173` (Vite) or `http://localhost:3000` (CRA).

---

## API Reference

This project uses the [REST Countries API](https://restcountries.com/) for live country data.

| Function | Endpoint | Description |
|---|---|---|
| `getCountryData()` | `GET /v3.1/all` | Fetches all countries |
| `getCountryIndData(id)` | `GET /v3.1/name/{id}` | Fetches a single country by name |

---

## Routes

| Path | Page | Description |
|---|---|---|
| `/` | Home | Hero section and country facts |
| `/about` | About | Cards with interesting country facts |
| `/country` | Country | Searchable, filterable country list |
| `/country/:id` | CountryDetails | Detailed info for a specific country |
| `/contact` | Contact | Contact and feedback form |
| `*` | Error | Catch-all error page |

---

## Key Implementation Details

- `createBrowserRouter` with a nested `Layout` route keeps the Navbar persistent across all pages.
- `useTransition` is used on the Country and CountryDetails pages to keep the UI responsive during data fetches, showing a loading state without blocking renders.
- Search and filter logic runs client-side on the already-fetched countries array — no extra API calls needed.
- The CountryDetails page handles complex nested API response objects (e.g., `nativeName`, `currencies`, `languages`) using `Object.keys().map()`.

---

## Contributing

Contributions are welcome. Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## License

This project is open source and available under the [MIT License](LICENSE).

---
