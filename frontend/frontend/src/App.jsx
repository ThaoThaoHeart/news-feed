import { useEffect, useState } from "react";
import { fetchArticles } from "./api/articles";
import ArticleList from "./components/ArticleList";

export default function App() {
  const [articles, setArticles] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchArticles()
      .then(setArticles)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Could not load articles: {error}</p>;

  return (
    <main>
      <h1>News Feed</h1>
      <ArticleList articles={articles} />
    </main>
  )
}