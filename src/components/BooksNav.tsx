"use client";

import { dashboardConfig } from "@/config/dashboard";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "./icons";

const booksNav = [
  {
    title: "Queue",
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

/***
 *           <div className="py-5 flex w-fit gap-4">
            <Link href="/dashboard/books">queue</Link>
            <Link href="/dashboard/books/accepted">accepted</Link>
            <Link href="/dashboard/books/rejected">rejected</Link>
          </div>
 * @returns 
 */
export default function BooksNav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-2">
      {booksNav.map((link, i) => {
        return (
          <Link
            href={link.href}
            className={cn(
              "py-1 text-sm px-2 rounded-lg flex flex-row gap-2 transition-colors items-center ",
              pathname === link.href ? "bg-gray-2" : ""
            )}
            key={i}
          >
            <div>{link.title}</div>
            <div>{link.count}</div>
          </Link>
        );
      })}
    </nav>
  );
}
