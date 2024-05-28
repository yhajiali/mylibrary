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
    case "/up-next":
      routeTitle = "Up Next";
      break;
    case "/finished":
      routeTitle = "Finished";
      break;
    case "/favorites":
      routeTitle = "Favorites";
      break;
    case "/bookshelf":
      routeTitle = "Bookshelf";
      break;
    default:
      break;
  }

  return (
    <main className="w-full max-w-7xl mx-auto flex flex-col gap-4">
      <h2 className="text-3xl font-bold">{routeTitle}</h2>
      <section className="w-full flex justify-center flex-wrap">
        {children}
      </section>
    </main>
  );
};

export default layout;
