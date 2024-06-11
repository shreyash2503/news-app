import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";
export default function Page() {
  return (
    <>
      <header className="flex flex-col items-center justify-center">
        <h1 className="font-sans text-5xl font-bold">News Page</h1>
      </header>
      <main className="w-[100%] grid grid-cols-3 gap-5 justify-items-center mt-5">
        <NewsList news={DUMMY_NEWS} />
      </main>
    </>
  );
}
