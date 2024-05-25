import Link from "next/link";
import React from "react";

type Book = {
  id: number;
  title: string;
  author: string;
  cover: string;
  summary: string;
  category: string;
  genre: string;
  year: number;
  status: string;
  pagesRead: number;
  totalPages: number;
  progress: number;
};

type Props = {
  book: Book;
};

const BookCard = ({ book }: Props) => {
  return (
    <Link
      href={`/library/book/${book.id}`}
      className="flex flex-col h-96 w-full max-w-sm rounded-lg border border-gray-300 shadow-md m-2 hover:cursor-pointer hover:-translate-y-1 transition duration-300"
    >
      {/* Book Image */}
      <div className="h-1/2 w-full border-b border-gray-300"></div>
      {/* Book Content */}
      <div className="space-between flex flex-col gap-6 px-6 py-4">
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">{book.title}</h3>
          <span>{book.author}</span>
          <span className="w-fit rounded-lg bg-gray-300 px-2">
            {book.category}
          </span>
        </div>
        <div>
          <span className="text-gray-500">{book.year}</span>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
