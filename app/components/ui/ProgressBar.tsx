import React from "react";

type Props = {
  progress: number;
};

const ProgressBar = ({ progress }: Props) => {
  return (
    <div className="flex gap-1">
      <div
        className={`size-2 border border-black ${progress > 0 && "bg-black"}`}
      ></div>
      <div
        className={`size-2 border border-black ${progress > 10 && "bg-black"}`}
      ></div>
      <div
        className={`size-2 border border-black ${progress > 20 && "bg-black"}`}
      ></div>
      <div
        className={`size-2 border border-black ${progress > 30 && "bg-black"}`}
      ></div>
      <div
        className={`size-2 border border-black ${progress > 40 && "bg-black"}`}
      ></div>
      <div
        className={`size-2 border border-black ${progress > 50 && "bg-black"}`}
      ></div>
      <div
        className={`size-2 border border-black ${progress > 60 && "bg-black"}`}
      ></div>
      <div
        className={`size-2 border border-black ${progress > 70 && "bg-black"}`}
      ></div>
      <div
        className={`size-2 border border-black ${progress > 80 && "bg-black"}`}
      ></div>
      <div
        className={`size-2 border border-black ${progress > 90 && "bg-black"}`}
      ></div>
    </div>
  );
};

export default ProgressBar;
