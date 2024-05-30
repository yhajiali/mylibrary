"use client";
import { usePathname } from "next/navigation";

const layout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  let routeTitle;

  switch (path) {
    case "/reading-summary":
      routeTitle = "My Reading Summary";
      break;
    case "/master-database":
      routeTitle = "Master Database";
      break;
    case "/settings":
      routeTitle = "Settings";
      break;
    default:
      break;
  }

  return (
    <main className="flex flex-col gap-4 md:px-10 md:py-6">
      <h2 className="text-3xl font-bold">{routeTitle}</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4">
        {children}
      </section>
    </main>
  );
};

export default layout;
