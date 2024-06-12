import NewsList, { NewsItem } from "@/components/news-list";
import { getAllNews } from "@/lib/news";

export default async function Page() {
  const news = (await getAllNews()) as NewsItem[];

  return (
    <>
      <header className="flex flex-col items-center justify-center">
        <h1 className="font-sans text-5xl font-bold">News Page</h1>
      </header>
      <main className="w-[100%] grid grid-cols-3 gap-5 justify-items-center mt-5 items-center justify-center">
        <NewsList news={news} />
      </main>
    </>
  );
}
