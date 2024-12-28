# Next.js 15 App Router useEffect with setInterval Issue

This repository demonstrates an unexpected behavior encountered when using `useEffect` with `setInterval` within a dynamic route segment in Next.js 15's App Router.  The counter continues to increment even after navigating away from the page, a behavior not observed in previous versions of Next.js.

## Bug Description

The counter in the `/about` page should stop incrementing once the user navigates away from it. However, in the provided example, the counter continues to increment in the background, demonstrating a memory leak or unexpected behavior related to the App Router's lifecycle management.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to `/about`.
5. Observe the counter incrementing every second.
6. Navigate away from `/about` (e.g., to the home page).
7. Observe that the counter continues to increment even though you're no longer on the `/about` page.

## Solution

The solution involves ensuring proper cleanup within the `useEffect` hook's return function.  This is usually done by clearing any intervals or timeouts that were set within the effect.  See the `aboutSolution.js` file for a corrected implementation.