"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function MainHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<Boolean>(false);
  const toggleSidbar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <>
      <nav className="flex items-center m-8 justify-between">
        <div className="flex items-center justify-start w-[70%]">
          <Image src="/newspaper.png" width={50} height={50} alt="News Icon" />
        </div>
        <div className="hidden md:flex w-[20%] items-center justify-around">
          <Button variant="ghost">
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost">
            <Link href="/news">News</Link>
          </Button>
          <Button variant="ghost">
            <Link href="/archive">Archive</Link>
          </Button>
        </div>
        <div className="md:hidden flex items-center">
          <Button variant="ghost" onClick={toggleSidbar}>
            <HamburgerMenuIcon height={30} width={30} />
          </Button>
        </div>
      </nav>
      {isSidebarOpen && (
        <div className="fixed  inset-0 w-[100%] bg-white z-50 flex justify-around lg:hidden">
          <div className="bg-white w-[20%] p-4 flex items-start justify-center">
            <Button variant="ghost" onClick={toggleSidbar}>
              <Cross1Icon />
            </Button>
          </div>
          <nav className="mt-4 w-[70%] flex flex-col items-center">
            <Button variant="ghost" onClick={toggleSidbar}>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="ghost" onClick={toggleSidbar}>
              <Link href="/news">News</Link>
            </Button>
            <Button variant="ghost" onClick={toggleSidbar}>
              <Link href="/archive">Archive</Link>
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
