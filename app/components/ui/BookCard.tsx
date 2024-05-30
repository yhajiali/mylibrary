import Image from "next/image";
import Link from "next/link";
import React from "react";
import defaultCover from "../../../public/next.svg";
import ProgressBar from "./ProgressBar";

type Book = {
  id: number;
  title: string;
  author: string;
  cover: string;
  summary: string;
  genres: (string | undefined)[];
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
      href={`/book/${book.id}`}
      className="flex flex-col h-96 w-full max-w-s rounded-lg border border-gray-300 shadow-md hover:cursor-pointer hover:-translate-y-1 transition duration-300"
    >
      {/* Book Cover */}
      <figure className="h-1/2 w-full border-b border-gray-300 flex justify-center items-center">
        <Image
          src={book.cover || defaultCover}
          width={100}
          height={100}
          alt={`Book Cover of: ${book.title}`}
        />
      </figure>

      {/* Book Content */}
      <div className="h-1/2 w-full flex flex-col justify-between gap-6 px-6 my-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">{book.title}</h3>
          <span className="text-sm font-semibold">{book.author}</span>
          <span className="text-sm">
            On Page: {book.pagesRead} of {book.totalPages}
          </span>

          <ProgressBar progress={book.progress} />
        </div>

        <div className="flex flex-wrap justify-between items-center gap-2">
          <div className="flex gap-1">
            {book.genres.map((genre, index) => (
              <span
                className="w-fit rounded text-sm bg-gray-300 px-2"
                key={index}
              >
                {genre}
              </span>
            ))}
          </div>
          <span className="text-xs text-gray-500">{book.year}</span>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
