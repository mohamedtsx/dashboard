import React from "react";
import Image from "next/image";
import { TypeBookCard } from "@/types";

import { Button } from "./ui/button";

function BookCard({ book }: { book: TypeBookCard }) {
  const { author, date, id, imageUrl, title } = book;

  return (
    <div className="flex border justify-between bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="flex">
        <Image
          src={imageUrl}
          alt="book cover image"
          width={120}
          height={160}
          className="rounded-md"
        />
        <div className="ml-4">
          <div>
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-sm text-gray-700">
              By{" "}
              <a
                href="https://en.wikipedia.org/wiki/Taha_Hussein"
                target="_blank"
                className="hover:underline text-blue-600 capitalize"
              >
                {author}
              </a>
            </p>
            <div className="text-sm text-gray-600">
              Published @ <span>{date}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end">
        <Button className="hover:bg-gray-2 transition">Review</Button>
      </div>
    </div>
  );
}

export default BookCard;
