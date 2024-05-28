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
    <>
      <h2>{routeTitle}</h2>
      <section className="flex justify-center flex-wrap">{children}</section>
    </>
  );
};

export default layout;
