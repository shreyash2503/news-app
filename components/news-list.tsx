import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  image: string;
  date: string;
  content: string;
}
export default function NewsList({ news }: { news: NewsItem[] }) {
  return (
    <>
      {news.map((newsItem) => {
        return (
          <Card key={newsItem.id} className="w-[350px] hover:bg-gray-100">
            <Link href={`/news/${newsItem.slug}`}>
              <CardHeader className="flex items-center justify-center">
                <Image
                  src={`/images/news/${newsItem.image}`}
                  height={200}
                  width={200}
                  alt={newsItem.image}
                />
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <p>{newsItem.title}</p>
              </CardContent>
            </Link>
          </Card>
        );
      })}
    </>
  );
}
