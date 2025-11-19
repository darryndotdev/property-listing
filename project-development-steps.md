# Project Development Steps

A breakdown of how this project was planned and built systematically.

## 1. Define the Goal

I wanted to build a small but realistic project demonstrating user-driven filtering, URL-based search parameters and server-powered data querying. The goal was to:

-   Display a list of properties from a static JSON dataset.
-   Let users filter by location and superhost status.
-   Sync filter state with the URL so filters persist on reload and can be shared.
-   Separate UI concerns cleanly into reusable components.
-   Build a small API layer inside Next.js to practice server-side filtering logic.

## 2. Research & Plan Architecture

Before writing code, I decided how the app should be structured using the Next.js App Router:

### Key architectural choices

-   **Next.js App Router** for file-based routing and server components.
-   **Client components** (`'use client'`) for interactive parts like filters.
-   **Custom API route** `/api/properties` to handle:

    -   `?locations=`
    -   `?superhost=`

-   **Frontend fetch logic** inside a `PropertyList` component, reacting to URL changes.
-   **URL as source of truth** using `useSearchParams()` and `router.push()`.

### Directory plan

-   app/
-   api/
-   properties/route.js
-   components/
-   FiltersPanel/
-   PropertyList/
-   PropertyItem/
-   SuperHost/
-   Container/
-   data/property-listing-data.json
-   styles/globals.css
-   layout.js
-   page.js

## 3. Write User Stories & Acceptance Criteria

Before coding, I mapped out the behaviour from the user’s perspective.

-   Browsing all properties.
-   Filtering by country.
-   Filtering by Ssperhost status.
-   Filtering by property type.
-   URL-based filtering so filters persist on reload.

(See `user-stories.md` for the full list.)

This clarified what the UI needed to do and what the API had to support.

## 4. Implement the API Route

Built `app/api/properties/route.js` to accept multiple search parameters.

Steps:

1. Load the JSON dataset.
2. Read URL search parameters.
3. Apply filters server-side:
    - `superhost=true`
    - `locations=Norway`
4. Return filtered JSON.

This allowed the frontend to request **only the data needed** based on the UI filters.

## 5. Build the Core UI Components

### **PropertyList**

-   Fetches property data based on the current URL.
-   Re-fetches automatically when search parameters change.
-   Renders a grid of cards.

### **PropertyItem**

-   Displays image, title, type, country and superhost label.

### **SuperHost badge**

-   Conditionally renders based on property data.

### **FiltersPanel**

-   Uses state for filter selections.
-   Mirrors state → URL parameters.
-   URL updates trigger `PropertyList` to fetch data again.

I kept the UI minimal and clean, focusing on interaction and behaviour.

## 6. Manage Search Params & URL Syncing

This was a key learning area.

### Challenges solved:

-   Keeping radio buttons/checkboxes in sync with URL state.
-   Ensuring the UI reflects filters on page load.
-   Preventing scroll-reset on every URL update.
-   Avoiding infinite re-renders with `useEffect`.

### Final approach:

-   Initial state reads from `useSearchParams()`.
-   `useEffect` updates URL whenever filters change.
-   `{ scroll:false }` prevents the page jumping to top.
-   PropertyList listens to URL changes and refetches data.

This resulted in smooth, predictable behaviour.

## 7. Styling & Layout

-   Global styles set in `globals.css`.
-   CSS Modules used for component-scoped styling.
-   Simple layout using a `Container` component.
-   Grid-based layout for property cards.

The goal was clarity, spacing, and legibility.

## 8. Deployment to Vercel

Initially encountered build issues because `useSearchParams()` requires a Suspense boundary in App Router.

Fix:

```jsx
<Suspense>
    <FiltersPanel />
</Suspense>
```
