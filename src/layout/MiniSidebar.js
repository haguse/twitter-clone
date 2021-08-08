import React, { useState } from "react";
import twitterLogo from "../icons/twitter.svg";
import "../styles/miniSidebar.css";
import {
  HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  BookmarksIcon,
  ListsIcon,
  ProfileIcon,
  MoreIcon,
} from "../icons/icon";
import MiniSideLink from "../components/MiniSideLink";

const sideLinks = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Explore",
    icon: ExploreIcon,
  },
  {
    name: "Notifications",
    icon: NotificationsIcon,
  },
  {
    name: "Messages",
    icon: MessagesIcon,
  },
  {
    name: "Bookmarks",
    icon: BookmarksIcon,
  },
  {
    name: "Lists",
    icon: ListsIcon,
  },
  {
    name: "Profile",
    icon: ProfileIcon,
  },
  {
    name: "More",
    icon: MoreIcon,
  },
];

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const handleMenuItemClick = (name) => {
    setActiveLink(name);
  };

  return (
    <div className="mini-sidebar h-screen w-16 sticky top-0 flex flex-col justify-between px-2 xl:hidden">
      <div>
        <div className="mt-1 mb-4 ml-2 flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-lightets">
          <img src={twitterLogo} alt="Twitter Logo" className="w-8 h-8 mr-2" />
        </div>
        <nav className="mb-4">
          <ul>
            {sideLinks.map(({ name, icon }) => (
              <MiniSideLink
                key={name}
                name={name}
                Icon={icon}
                active={activeLink}
                onMenuItemClick={handleMenuItemClick}
              />
            ))}
          </ul>
        </nav>
      </div>
      <img
        className="w-10 h-10 rounded-full mb-7 mx-auto"
        src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
        alt="Profile"
      />
    </div>
  );
};

export default Sidebar;
