"use client";
import BookCard from "./components/ui/BookCard";

export default function Home() {
  return (
    <div className="flex justify-center flex-wrap">
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  );
}
