"use client";
import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

export const IssueHeader = ({ source }: { source: string }) => {
  return (
    <div className="flex justify-start items-center gap-7 my-3 p-2">
      <Link
        className="group text-sky-600 transition duration-300"
        href={`https://github.com/perceptui/ui/blob/main/apps/lib/src/${source}.tsx`}
        target="_blank"
      >
        View source <MdArrowOutward className="inline" />
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
      </Link>
      <Link
        className="group text-sky-600 transition duration-300"
        href={`https://github.com/perceptui/ui/issues/new?title=[${
          source.split("/")[source.split("/").length - 1]
        }]%20Issue`}
        target="_blank"
      >
        Report an issue <MdArrowOutward className="inline" />
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
      </Link>
    </div>
  );
};
