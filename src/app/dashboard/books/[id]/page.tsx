import React from "react";
import { BOOKS } from "@/lib/data";

// function Review({ params: { id } }: { params: { id: string } }) {
//   const book = BOOKS.find((book) => book.id === +id);

//   if (!book) return <div>Book not found</div>;

//   return <div></div>;
// }

// export default Review;

// import { Badge } from "@/components/ui/badge";

export default function Component() {
  return (
    <div className="max-w-2xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
        <div className="aspect-w-3 aspect-h-4">
          <img
            alt="Book cover"
            className="object-cover rounded-lg shadow-lg"
            src="/placeholder.svg"
          />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            The Great Gatsby
          </h1>
          <h2 className="text-xl text-gray-500">W. Frank Ableson</h2>
          <dl className="grid gap-2">
            <div className="grid grid-cols-2 gap-2">
              <dt className="font-medium">ISBN</dt>
              <dd className="text-gray-500">1933988673</dd>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <dt className="font-medium">Page Count</dt>
              <dd className="text-gray-500">416</dd>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <dt className="font-medium">Published Date</dt>
              <dd className="text-gray-500">2 days ago</dd>
            </div>
          </dl>
          <p className="text-gray-500">
            Unlocking Android: A Developer's Guide provides concise, hands-on
            instruction for the Android operating system and development tools.
            This book teaches important architectural concepts in a
            straightforward writing style and builds on this with practical and
            useful examples throughout.
          </p>
          <div className="flex flex-wrap gap-2">
            {/* <Badge variant="secondary">Open Source</Badge> */}
            {/* <Badge variant="secondary">Mobile</Badge> */}
          </div>
          <div className="text-green-500 font-semibold">PUBLISH</div>
        </div>
      </div>
    </div>
  );
}
