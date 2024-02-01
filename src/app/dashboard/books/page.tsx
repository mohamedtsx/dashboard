import React from "react";
import BookCard from "@/components/NewBook";
import { TypeBookCard } from "@/types";
import { inQueueBooks } from "@/lib/data";

function Queue() {
  const books: TypeBookCard[] = inQueueBooks;

  return (
    <div className="flex flex-col gap-5">
      {books.map((el) => (
        <BookCard book={el} key={el.id} />
      ))}
    </div>
  );
}

export default Queue;
