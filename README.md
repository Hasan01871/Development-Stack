# Dev Stack

Dev Stack is a small web app that helps developers explore different frontend, backend,
database, and tooling options and build a personal "stack" out of the ones they like.
Browse the technology cards, add the ones you want, and watch your stack build up in the
sidebar — all with a single click.

## Technology Used

- React.js
- TypeScript
- Tailwind CSS
- React-Toastify (npm package)
- JSON (for technology data)
- Vite (build tool)

## Features

1. **Explore & compare technologies** — 12 technologies across Frontend, Backend, Database,
   Language, Styling, and DevOps, each shown as a card with an icon, badge, rating, and
   difficulty level, loaded dynamically from a JSON file.
2. **Build your own stack** — Click "Add to Stack" on any card to add it to your personal
   stack in the sidebar. Duplicate adds are blocked with a warning toast, and an added
   card's button changes to "✓ Added to Stack".
3. **Manage your stack** — Remove a single technology with its × button, or clear
   everything at once with "Remove All". Every action (add, duplicate, remove, remove all)
   shows a toast notification, and the whole layout is fully responsive from mobile to
   desktop.

## React Questions

**i. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets you write HTML-like markup directly inside
JavaScript/TypeScript files. React uses it because it makes the structure of a component's
UI easy to read and write in the same place as the logic that drives it, instead of
juggling separate template files.

**ii. What is the difference between props and state?**
Props are values passed *into* a component from its parent — the component that receives
them cannot change them. State is data a component manages *itself* and can update over
time (for example with `useState`), which causes the component to re-render.

**iii. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a functional component hold and update its own data. In this project it's
used in `App.tsx` for `technologies` (the fetched list), `selectedStack` (the user's chosen
stack), and `loading` (whether the JSON is still being fetched).

**iv. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs side effects — code that isn't part of rendering, like fetching data —
after a component renders. It's needed here because fetching `technologies.json` is an
async operation that should only run once when the app first loads, not on every render,
so it's placed inside `useEffect` with an empty dependency array (`[]`).

**v. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to tell items in a list apart between renders, so it knows exactly
which item was added, removed, or reordered instead of re-rendering the whole list. Without
a stable, unique key, React can mix up items and cause bugs or lose component state.

**vi. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on a condition. In `Sidebar.tsx`,
`{stackItems.length === 0 ? (...) : (...)}` shows an "empty stack" message when nothing has
been added yet, and switches to the actual list of stack items once technologies are added.
`App.tsx` does the same for the loading spinner versus the technology grid.

**vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child through props, e.g. `<TechCard tech={tech} />`. To
send something back up, the parent passes a *function* as a prop (e.g. `onAddToStack`), and
the child calls that function with the relevant data — like `onAddToStack(tech)` — which
runs the parent's state-update logic.