import { books } from "@/lib/data";
import BookCard from "../../components/ui/BookCard";

type Props = {};

const page = ({}: Props) => {
  return (
    <>
      {books
        .filter((book) => book.favorite)
        .map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
    </>
  );
};

export default page;
