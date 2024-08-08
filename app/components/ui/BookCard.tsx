import Image from "next/image";
import Link from "next/link";
import React from "react";
import defaultCover from "../../../public/next.svg";
import ProgressBar from "./ProgressBar";
import { Badge, Flex } from "@radix-ui/themes";

type Book = {
  id: number;
  title: string;
  author: string;
  cover: string;
  summary: string;
  genres: (string | undefined)[];
  year: number;
  status: "reading" | "up next" | "finished" | string; // Restrict status types
  pagesRead: number;
  totalPages: number;
  progress: number;
};

type Props = {
  book: Book;
  status?: boolean;
};

const BookCard = ({ book, status = false }: Props) => {
  // Mapping book.status to the specific types allowed by Badge color
  let statusColor: "gray" | "blue" | "green" | undefined;

  switch (book.status) {
    case "reading":
      statusColor = "blue";
      break;
    case "up next":
      statusColor = "gray";
      break;
    case "finished":
      statusColor = "green";
      break;
    default:
      statusColor = undefined;
      break;
  }

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
      <div className="h-1/2 w-full flex flex-col justify-between gap-4 px-6 my-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">{book.title}</h3>
          <span className="text-sm font-semibold">{book.author}</span>
          <span className="text-sm">
            On Page: {book.pagesRead} of {book.totalPages}
          </span>

          <ProgressBar progress={book.progress} />
        </div>

        {status && (
          <Flex gap="2">
            <Badge color={statusColor} className="capitalize">
              {book.status}
            </Badge>
          </Flex>
        )}

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
