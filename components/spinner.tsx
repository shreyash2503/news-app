export function Spinner() {
  return (
    <div className="flex items-center justify-center h-6 m-10">
      <div className="relative">
        <div className="h-5 w-5 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-10 w-10 rounded-full border-t-8 border-b-8 border-slate-900 animate-spin"></div>
      </div>
    </div>
  );
}
