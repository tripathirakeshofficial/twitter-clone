import { RefreshIcon } from "@heroicons/react/outline";
import React from "react";

const Feed: React.FC = () => {
  return (
    <div className="col-span-8 lg:col-span-5 border-x">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon className="h-8 w-8 cursor-pointer text-twitter mr-5 mt-5 transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>
    </div>
  );
};

export default Feed;