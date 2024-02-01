import React from "react";
import Image from "next/image";

interface Book {
  title: string;
  imageUrl: string;
  author: string;
  date: string;
  id: number;
  authorId: number;
}

function BookCard({ book }: { book: Book }) {
  const { author, date, id, imageUrl, title } = book;

  return (
    <div className="flex justify-between">
      <Image src={imageUrl} alt="book cover image" width={160} height={225} />
      <div>
        <div>
          <h2>{title}</h2>
          <p>
            By{" "}
            <a
              href="https://en.wikipedia.org/wiki/Taha_Hussein"
              target="_blank"
              className="hover:outline text-blue-600 capitalize"
            >
              {author}
            </a>
          </p>
        </div>
        <div>
          Published @ <span>{date}</span>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
