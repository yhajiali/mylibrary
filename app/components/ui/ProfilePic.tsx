import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";

const ProfilePic = () => {
  return (
    <div
      className={`rounded-md bg-blue-500 size-full flex items-center justify-center`}
    >
      <UserCircleIcon className="size-7" />
    </div>
  );
};

export default ProfilePic;
