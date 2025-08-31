# Next.js 15 Template

A basic Next.js 15 project with common folders and examples to help you get started quickly.

## Folder Structure

```
app/            # Route handlers and pages
components/     # UI components
contexts/       # React context providers
hooks/          # Custom React hooks
lib/            # Redux store and other libraries
services/       # API and data-fetching utilities
styles/         # Global style assets
utils/          # Generic utility helpers
types/          # Shared TypeScript types
public/         # Static files served at the root
```

### `app/`
Defines routes using the Next.js App Router.
```tsx
// app/page.tsx
export default function Home() {
  return <h1>Hello Next.js 15</h1>
}
```

### `components/`
Reusable UI pieces.
```tsx
// components/Button.tsx
export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} />
}
```

### `hooks/`
Custom hooks encapsulating logic.
```ts
// hooks/useToggle.ts
const [on, toggle] = useToggle()
```

### `contexts/`
Shared state via React context.
```tsx
// contexts/ThemeContext.tsx
const { theme, toggle } = useTheme()
```

### `services/`
Centralized data fetching.
```ts
// services/api.ts
const data = await fetchExample()
```

### `utils/`
General helper functions.
```ts
// utils/formatDate.ts
formatDate(new Date())
```

### `types/`
Shared TypeScript type definitions.
```ts
// types/index.ts
export type Example = { id: number; name: string }
```

### `styles/`
Global style variables or CSS modules.
```css
/* styles/variables.css */
:root { --color-primary: #2563eb; }
```

## Scripts

- `yarn dev` – Run the development server
- `yarn build` – Build for production
- `yarn start` – Start the production build
- `yarn lint` – Lint the project

## Example Usage
The default home page demonstrates using Redux, a custom hook and a shared component.
```tsx
// app/page.tsx
const [on, toggle] = useToggle()
return (
  <Button onClick={toggle}>Toggle ({on ? 'ON' : 'OFF'})</Button>
)
```
