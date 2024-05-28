import { books } from "@/lib/data";
import React from "react";
import BookCard from "../../components/ui/BookCard";

type Props = {};

const page = ({}: Props) => {
  return (
    <section className="flex justify-center flex-wrap">
      {books
        .filter((book) => book.status === "reading")
        .map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
    </section>
  );
};

export default page;
