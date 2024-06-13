import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getNewsItem } from "@/lib/news";
import { NewsItem } from "@/components/news-list";

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const newItems = (await getNewsItem(slug)) as NewsItem;
  if (!newItems) {
    notFound();
  }
  return (
    <>
      <header className="flex flex-col items-center justify-center m-2">
        <h1 className="font-sans font-bold text-5xl m-2">{newItems?.title}</h1>
        <Link href={`/news/${newItems.slug}/image`}>
          <Image
            src={`/images/news/${newItems?.image}`}
            height={400}
            width={400}
            alt={newItems?.title as string}
          />
        </Link>
      </header>
      <main className="flex flex-col items-center justify-center">
        <p>{newItems?.content}</p>
      </main>
    </>
  );
}
