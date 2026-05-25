# Taj Recycle Inner Page

Files included:
- `TajRecyclePage.jsx` — Full React component
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
  href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&display=swap"
  rel="stylesheet"
/>
```

Optional Tailwind config:

```js
theme: {
  extend: {
    fontFamily: {
      sans: ["Archivo", "sans-serif"],
    },
  },
}
```

## Usage

Import and use:

```jsx
import TajRecyclePage from "./TajRecyclePage";

export default function App() {
  return <TajRecyclePage />;
}
```
