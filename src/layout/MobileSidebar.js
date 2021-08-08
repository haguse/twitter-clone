import React from "react";
import {
  HomeIcon,
  MessagesIcon,
  NotificationsIcon,
  SearchIcon,
} from "../icons/icon";

const MobileSidebar = () => {
  return (
    <div className="w-full fixed bottom-0 sm:hidden border-t border-gray-light">
      <div className="flex items-center justify-between mx-14 my-3">
        <div className="text-primary-base">
          <HomeIcon />
        </div>
        <div className="text-gray-dark">
          <SearchIcon className="w-7 h-7" />
        </div>
        <div className="text-gray-dark">
          <NotificationsIcon />
        </div>
        <div className="text-gray-dark">
          <MessagesIcon />
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
