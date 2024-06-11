import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col items-center h-full justify-between p-10 text-center gap-10">
      <img
        className="h-20 border-black border-2 rounded-full p-4"
        src={`newspaper.png`}
        alt="Newspaper logo"
      />
      <h1 className="text-4xl mb-5">A News Site For The Next Generation</h1>
      <Card>
        <CardContent>
          Next News is here to deliver you all the latest news - concise &
          unbiased!
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          NextNews aims to provide you with the latest news in a concise and
          unbiased manner. We strive to deliver the news in a way that is easy
          to understand and to the point. We want to keep you informed without
          overwhelming you with unnecessary information.
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          We employ a team of dedicated journalists who are committed to
          delivering the news in a fair and unbiased manner. Our team is
          passionate about keeping you informed and up to date with the latest
          news.
        </CardContent>
      </Card>

      <Button>
        <Link href="/news">Read the latest news</Link>
      </Button>
    </main>
  );
}
