import React from "react";
import { books } from "../../../lib/data";
import BookCard from "@/app/components/ui/BookCard";

type Props = {};

const page = ({}: Props) => {
  return (
    <section className="flex justify-center flex-wrap">
      {books
        .filter((book) => book.status === "reading")
        .map((book, index) => (
          <BookCard book={book} key={index} />
        ))}
    </section>
  );
};

export default page;
