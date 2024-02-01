"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const booksNav = [
  {
    title: "In queue",
    href: "/dashboard/books",
    count: 19,
  },
  {
    title: "Accepted",
    href: "/dashboard/books/accepted",
    count: 120,
  },
  {
    title: "Rejected",
    href: "/dashboard/books/rejected",
    count: 2,
  },
];

export default function BooksNav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-2 w-fit px-8 rounded-3xl border py-2 mx-auto mb-8">
      {booksNav.map((link, i) => {
        return (
          <Link
            href={link.href}
            className={cn(
              "rounded-lg flex flex-row gap-2 transition-colors items-center text-sm py-2 px-4 ",
              pathname === link.href ? "bg-gray-2" : ""
            )}
            key={i}
          >
            <div>{link.title}</div>
            <div> {`(${link.count})`}</div>
          </Link>
        );
      })}
    </nav>
  );
}
