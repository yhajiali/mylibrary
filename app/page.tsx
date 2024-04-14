import BookCard from "./components/ui/BookCard";

export default function Home() {
  return (
    <section className="ml-64 my-4 w-full flex flex-wrap overflow-hidden">
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </section>
  );
}
