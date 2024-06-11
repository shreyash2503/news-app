"use client";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";

export default function InterceptedImageRoute({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const router = useRouter();

  const newItem = DUMMY_NEWS.find((news) => news.slug === slug);
  if (!newItem) {
    notFound();
  }
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.85)",
      }}
      onClick={router.back}
      className="flex items-center justify-center fixed top-0 left-0 w-[100%] h-[100%]"
    >
      <dialog
        className="bg-[#bababa] p-[2rem] rounded-[4px] border-none max-w-[50rem] w-[100%]"
        open
      >
        <img src={`/images/news/${newItem.image}`} alt={newItem.title} />
      </dialog>
    </div>
  );
}
