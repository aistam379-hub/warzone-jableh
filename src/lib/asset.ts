// Public-folder assets need the configured base path prepended, or they
// 404 once the site is deployed under a subpath (e.g. GitHub Pages'
// /warzone-jableh/) — Vite only rewrites paths it processes at build time,
// not raw strings like src="/logo.png" in JSX.
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
