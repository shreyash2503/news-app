"use client";

import { useRouter } from "next/navigation";

export default function ModalBackdrop({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.85)",
      }}
      onClick={router.back}
      className="flex items-center justify-center fixed top-0 left-0 w-[100%] h-[100%]"
    >
      {children}
    </div>
  );
}
