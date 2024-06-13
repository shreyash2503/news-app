import NewsList, { NewsItem } from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

export default async function ArchivePage() {
  const latestNews = (await getLatestNews()) as NewsItem[];
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
