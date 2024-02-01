import React from "react";
import { BOOKS } from "@/lib/data";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";

export default function Review({ params: { id } }: { params: { id: string } }) {
  const book = BOOKS.find((book) => book.id === +id);

  if (!book) {
    return <div>Book not found</div>;
  }

  const {
    authorId,
    authors,
    categories,
    imageUrl,
    isbn,
    pageCount,
    publishedDate,
    shortDescription,
    status,
    title,
  } = book;

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-white rounded-lg shadow-lg">
      <div className="flex gap-20 border-b-2 pb-5">
        <Image
          alt="Book cover"
          className="rounded-lg shadow-lg w-64 h-auto"
          src={imageUrl}
          width={600}
          height={800}
        />
        <div className="flex flex-col justify-between w-full">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
            <h2 className="text-xl text-gray-600">{authors}</h2>

            <dl className="grid grid-cols-2 gap-2 mt-4">
              <div className="flex items-center">
                <dt className="font-medium text-gray-800">ISBN:</dt>
                <dd className="text-gray-600 ml-2">{isbn}</dd>
              </div>
              <div className="flex items-center">
                <dt className="font-medium text-gray-800">Page Count:</dt>
                <dd className="text-gray-600 ml-2">{pageCount}</dd>
              </div>
              <div className="flex items-center">
                <dt className="font-medium text-gray-800">Published Date:</dt>
                <dd className="text-gray-600 ml-2">{publishedDate}</dd>
              </div>
            </dl>

            <p className="text-gray-700 mt-4">{shortDescription}</p>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">Categories:</h3>
            <div className="flex flex-wrap mt-2">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="p-1 px-2 bg-gray-200 text-gray-800 rounded-lg mr-2 mb-2"
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <a
          href="https://pdcrodas.webs.ull.es/naturalismo/FitzgeraldTheGreatGastby.pdf"
          className={buttonVariants}
          target="_blank"
        >
          View Content
        </a>

        <div className="flex gap-5">
          <Button>Accept</Button>
          <Button>Reject</Button>
        </div>
      </div>
    </div>
  );
}
