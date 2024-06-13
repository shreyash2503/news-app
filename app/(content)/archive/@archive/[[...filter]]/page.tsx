import NewsList, { NewsItem } from "@/components/news-list";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";
import { Suspense } from "react";

async function FilterHead({
  year,
  month,
}: {
  year: string | undefined;
  month: string | undefined;
}) {
  let links = await getAvailableNewsYears();

  if (
    (year && !((await getAvailableNewsYears()) as string[]).includes(year)) ||
    (month && year && !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error("Invalid filter");
  }
  if (year && !month) {
    links = getAvailableNewsMonths(year) as string[];
  }

  if (year && month) {
    links = [];
  }
  return (
    <header className="m-[50px]">
      <nav className="flex w-[100%] gap-8 items-center justify-center">
        {links.map((link) => {
          const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;
          return (
            <Link href={href} key={link}>
              <Button>{link}</Button>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

async function FilteredNews({
  year,
  month,
}: {
  year: string | undefined;
  month: string | undefined;
}) {
  let news;
  if (year && !month) {
    news = (await getNewsForYear(year)) as NewsItem[];
  } else if (year && month) {
    news = (await getNewsForYearAndMonth(year, month)) as NewsItem[];
  }
  let newsContent = <p>No news found for the selected period</p>;
  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }
  return newsContent;
}

export default async function FilteredNewsPage({
  params,
}: {
  params: { filter: string[] };
}) {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMontth = filter?.[1];

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <FilterHead year={selectedYear} month={selectedMontth} />
      </Suspense>
      <div className="flex flex-wrap justify-center items-center w-[100%] gap-4 m-5">
        <Suspense fallback={<Spinner />}>
          <FilteredNews year={selectedYear} month={selectedMontth} />
        </Suspense>
      </div>
    </>
  );
}
