import React from "react";
import { SearchIcon } from "../icons/icon";
import { Timeline } from "react-twitter-widgets";

const Widgets = () => {
  return (
    <div>
      <aside className="w-80">
        <div className="flex items-center space-x-2 p-2 m-2 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
          <SearchIcon className="w-4 h-4" />
          <input
            type="search"
            placeholder="Search Twitter"
            className="placeholder-gray-dark bg-transparent focus:outline-none w-full text-sm focus-within:"
          />
        </div>
        <div className="mt-5 md:invisible">
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: "TwitterDev",
            }}
            options={{
              height: "1000",
            }}
          />
        </div>
      </aside>
    </div>
  );
};

export default Widgets;
