export default function ArticleList({ articles }) {
  return (
    <ul>
      {articles.map((a) => (
        <li key={a.id}>
          <a href={a.url} target="_blank" rel="noreferrer">
            {a.title}
          </a>
          <small> {new Date(a.published_at).toLocaleString()}</small>
          <p>{a.summary}</p>
        </li>
      ))}
    </ul>
  )
}
