import { NewsItem } from "@/components/news-list";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";
import ModalBackdrop from "@/components/modal-backdrop";

export default async function InterceptedImageRoute({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  const newItem = (await getNewsItem(slug)) as NewsItem;
  if (!newItem) {
    notFound();
  }
  return (
    <>
      <ModalBackdrop>
        <dialog
          className="bg-[#bababa] p-[2rem] rounded-[4px] border-none max-w-[50rem] w-[100%]"
          open
        >
          <img src={`/images/news/${newItem.image}`} alt={newItem.title} />
        </dialog>
      </ModalBackdrop>
    </>
  );
}
