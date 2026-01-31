import "./NewsCard.css";

function NewsCard({ title, author, date, previewSrc, description }) {
  return (
    <article className="news-card">
      <h3 className="news-card-title">{title}</h3>

      <div className="news-card-meta">
        <span>
          <strong>Posted By:</strong> {author}
        </span>
        <span className="news-card-date">{date}</span>
      </div>

      <div className="news-card-preview">
        <iframe
          src={previewSrc}
          title={title}
          loading="lazy"
        />
      </div>

      <span className="news-card-tag">PDF</span>

      <p className="news-card-description">{description}</p>
    </article>
  );
}

export default NewsCard;
