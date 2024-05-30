import { books } from "@/lib/data";
import BookCard from "../../components/ui/BookCard";

const page = () => {
  return (
    <>
      {books.map((book) => (
        <BookCard book={book} key={book.id} />
      ))}
    </>
  );
};

export default page;
