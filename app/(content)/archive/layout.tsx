export default function ArchiveLayout({
  archive,
  latest,
}: {
  archive: React.ReactNode;
  latest: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-10">News Archive</h1>
      <section className="flex flex-col items-center justify-center gap-4 border-b-2 border-gray-500 w-[80%]">
        {archive}
      </section>
      <section className="flex items-center gap-4 justify-center w-[80%]">
        {latest}
      </section>
    </div>
  );
}
