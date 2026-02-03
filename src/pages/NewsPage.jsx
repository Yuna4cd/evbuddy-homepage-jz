import NewsHeader from "../components/NewsPageComponents/NewsHeader"
import NewsGrid from "../components/NewsPageComponents/NewsGrid"
import "./NewsPage.css"

export default function NewsPage() {
  return (
    <div className='news-page'>
      <NewsHeader />
      <NewsGrid />
    </div>
  );
}