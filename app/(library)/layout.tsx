"use client";
import { usePathname } from "next/navigation";

const layout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  let routeTitle;

  switch (path) {
    case "/reading":
      routeTitle = "Currently Reading";
      break;
    case "/up-next":
      routeTitle = "Up Next";
      break;
    case "/finished":
      routeTitle = "Finished";
      break;
    case "/bookshelf":
      routeTitle = "Bookshelf";
      break;
    default:
      break;
  }

  return (
    <main className="flex flex-col gap-4 md:px-6 md:py-4">
      <h2 className="text-3xl font-bold">{routeTitle}</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4">
        {children}
      </section>
    </main>
  );
};

export default layout;
