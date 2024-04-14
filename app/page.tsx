import BookCard from "./components/ui/BookCard";

export default function Home() {
  return (
    <section className="my-4 w-full flex justify-center flex-wrap overflow-hidden">
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </section>
  );
}
