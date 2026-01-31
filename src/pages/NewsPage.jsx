import NewsHeader from "../components/NewsPageComponents/NewsHeader"
import NewsGrid from "../components/NewsPageComponents/NewsGrid"

export default function NewsPage() {
  return (
    <div className='home'>
      <NewsHeader />
      <NewsGrid />
    </div>
  );
}