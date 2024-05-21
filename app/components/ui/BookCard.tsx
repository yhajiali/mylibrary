import React from "react";

type Props = {};

const BookCard = ({}: Props) => {
  return (
    <div className="h-96 w-full max-w-sm rounded-lg border border-gray-300 shadow-md m-2">
      {/* Book Image */}
      <div className="h-1/2 w-full border-b border-gray-300"></div>
      {/* Book Content */}
      <div className="space-between flex flex-col gap-6 px-6 py-4">
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Book Title</h3>
          <span>Author</span>
          <span className="w-fit rounded-lg bg-gray-300 px-2">Category</span>
        </div>
        <div>
          <span className="text-gray-500">Year</span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
