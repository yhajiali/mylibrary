"use client";
import BookCard from "./components/ui/BookCard";

export default function Home() {
  return (
    <main className="lg:pl-60 m-4 flex justify-center flex-wrap">
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </main>
  );
}
