import NewsList from "@/components/news-list";
import { Button } from "@/components/ui/button";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";

export default function FilteredNewsPage({
  params,
}: {
  params: { filter: string[] };
}) {
  let links = getAvailableNewsYears();
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMontth = filter?.[1];
  let news;
  if (selectedYear && !selectedMontth) {
    news = getNewsForYear(+selectedYear);
    links = getAvailableNewsMonths(+selectedYear);
  }

  if (selectedYear && selectedMontth) {
    news = getNewsForYearAndMonth(+selectedYear, +selectedMontth);
    links = [];
  }

  let newsContent = <p>No news found for the selected period</p>;
  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }
  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMontth &&
      !getAvailableNewsMonths(+selectedYear).includes(+selectedMontth))
  ) {
    throw new Error("Invalid filter");
  }

  return (
    <>
      <header className="m-[50px]">
        <nav className="flex w-[100%] gap-8 items-center justify-center">
          {links.map((link) => {
            const href = selectedYear
              ? `/archive/${selectedYear}/${link}`
              : `/archive/${link}`;
            return (
              <Link href={href} key={link}>
                <Button variant="ghost">{link}</Button>
              </Link>
            );
          })}
        </nav>
      </header>
      <div className="flex flex-wrap justify-center items-center w-[100%] gap-4 m-5">
        {newsContent}
      </div>
    </>
  );
}
