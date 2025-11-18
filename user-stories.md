# User Stories

## 1. Browse properties

**Story:**  
As a user, I want to see a list of available properties so that I can browse options.

**Acceptance Criteria:**

-   Users can view a list of property cards with image, title, location, type, and Superhost indicator.
-   The list displays all properties when no filters are applied.

---

## 2. Filter by country

**Story:**  
As a user, I want to filter properties by country so that I can focus on locations I’m interested in.

**Acceptance Criteria:**

-   Users can select a country via radio buttons (or dropdown) to filter the property list.
-   Only properties in the selected country are displayed.
-   Selecting “All” shows properties from all countries.

---

## 3. Filter by superhost

**Story:**  
As a user, I want to filter properties by superhost status so that I can find highly-rated hosts.

**Acceptance Criteria:**

-   Users can toggle a superhost checkbox to show only properties with `superhost: true`.
-   Toggling off the checkbox shows all properties again.

---

## 4. URL-based filters

**Story:**  
As a user, I want the filters to update the URL so that I can share or reload the page and keep my selections.

**Acceptance Criteria:**

-   Filter selections are reflected in URL query parameters (e.g., `?locations=Norway&superhost=true`).
-   Reloading the page with a filtered URL shows the correct filtered results.
-   Changing filters updates the URL and the displayed properties dynamically without refreshing the page.
