import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <section>{children}</section>;
};

export default layout;
