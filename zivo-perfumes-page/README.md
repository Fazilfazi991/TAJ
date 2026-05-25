# Zivo Perfumes Luxury Inner Page

Files included:
- `ZivoPerfumesPage.jsx` — Full React component
- `cursor-prompt.txt` — Prompt you can paste into Cursor

## Dependencies

Install:

```bash
npm install framer-motion lucide-react
```

## Font Setup

Add this to your HTML head or global layout:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&display=swap"
  rel="stylesheet"
/>
```

Optional Tailwind config:

```js
theme: {
  extend: {
    fontFamily: {
      serif: ["Playfair Display", "serif"],
    },
  },
}
```

## Usage

Import and use:

```jsx
import ZivoPerfumesPage from "./ZivoPerfumesPage";

export default function App() {
  return <ZivoPerfumesPage />;
}
```
