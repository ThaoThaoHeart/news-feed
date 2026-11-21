const BASE_URL = import.meta.env.VITE_API_URL;

export async function fetchArticles() {
  const res = await fetch(`${BASE_URL}/articles/`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
