"use client";
import { books } from "@/lib/data";
import BookCard from "./components/ui/BookCard";

export default function Home() {
  return (
    <div className="flex justify-center flex-wrap">
      {books.map((book, index) => (
        <BookCard book={book} key={index} />
      ))}
    </div>
  );
}
