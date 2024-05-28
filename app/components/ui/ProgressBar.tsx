import React from "react";

type Props = {
  progress: number;
};

const ProgressBar = ({ progress }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <ul className="flex gap-1">
        <li
          className={`size-2 border border-black ${progress > 0 && "bg-black"}`}
        ></li>
        <li
          className={`size-2 border border-black ${
            progress > 10 && "bg-black"
          }`}
        ></li>
        <li
          className={`size-2 border border-black ${
            progress > 20 && "bg-black"
          }`}
        ></li>
        <li
          className={`size-2 border border-black ${
            progress > 30 && "bg-black"
          }`}
        ></li>
        <li
          className={`size-2 border border-black ${
            progress > 40 && "bg-black"
          }`}
        ></li>
        <li
          className={`size-2 border border-black ${
            progress > 50 && "bg-black"
          }`}
        ></li>
        <li
          className={`size-2 border border-black ${
            progress > 60 && "bg-black"
          }`}
        ></li>
        <li
          className={`size-2 border border-black ${
            progress > 70 && "bg-black"
          }`}
        ></li>
        <li
          className={`size-2 border border-black ${
            progress > 80 && "bg-black"
          }`}
        ></li>
        <li
          className={`size-2 border border-black ${
            progress > 90 && "bg-black"
          }`}
        ></li>
      </ul>
      <span className="text-sm text-gray-500">{progress}%</span>
    </div>
  );
};

export default ProgressBar;
