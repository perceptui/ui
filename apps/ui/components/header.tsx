import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 bg-black/30 backdrop-blur-2xl w-full shadow-lg border-b border-b-slate-800 z-[200]">
      <div className="flex items-center justify-center w-full bg-gradient-to-r from-sky-700 to-purple-700 bg-sky-600 py-2">
        <span className="text-sm text-white font-medium">
          ⚡️ New: Percept UI Templates are now available! Read the{" "}
          <Link href="/templates/" className="underline">
            Template Docs
          </Link>
        </span>
      </div>
      <nav className="flex justify-between items-center w-full mt-5 md:px-12 pb-3 px-4">
        <Link href="/" className="text-2xl font-bold">
          Percept UI (Beta)
        </Link>
        <div className="md:flex hidden items-center space-x-4">
          <Link href="/docs" className="font-medium hover:underline text-sm">
            Docs
          </Link>
          <Link href="/templates" className="font-medium hover:underline text-sm">
            Templates
          </Link>
        </div>
        <div className="flex gap-2 items-center justify-end md:hidden">
          <Link
            href="https://github.com/perceptui/ui"
            className="text-sm font-medium hover:underline"
          >
            <FaGithub className="h-6 w-6" />
          </Link>
          <Sheet>
            <SheetTrigger>
              <Menu size={30} />
            </SheetTrigger>
            <SheetContent className="md:hidden z-[99999999]">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="text-2xl font-bold">
                    Percept UI
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col justify-center items-start w-full mt-6">
                <Link href="/docs" className="font-medium py-3 hover:bg-slate-900 w-full pl-2 hover:border-l-2 hover:border-sky-400">
                  Documentation
                </Link>
                <Link href="/templates" className="font-medium py-3 hover:bg-slate-900 w-full pl-2 hover:border-l-2 hover:border-sky-400">
                  Templates
                </Link>
                <Link href="/framer" className="font-medium py-3 hover:bg-slate-900 w-full pl-2 hover:border-l-2 hover:border-sky-400">
                  Framer Components
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
