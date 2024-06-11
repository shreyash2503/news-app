import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function ImagePage({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const newItem = DUMMY_NEWS.find((news) => news.slug === slug);
  if (!newItem) {
    notFound();
  }
  return (
    <div className="flex items-center justify-center ">
      <h1>Hello</h1>
      <Image
        src={`/images/news/${newItem.image}`}
        height={500}
        width={500}
        alt={`${slug}`}
      />
    </div>
  );
}
