import React, { useState } from "react";
import twitterLogo from "../icons/twitter.svg";
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
import SideLink from "../components/SideLink";
import UserInfo from "../components/UserInfo";

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
    <div className="h-screen sticky top-0 flex flex-col justify-between lg:w-72 px-2 md:hidden">
      <div>
        <div className="mt-1 mb-4 ml-2 flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-lightets">
          <img src={twitterLogo} alt="Twitter Logo" className="w-9 h-9" />
        </div>
        <nav className="mb-4">
          <ul>
            {sideLinks.map(({ name, icon }) => (
              <SideLink
                key={name}
                name={name}
                Icon={icon}
                active={activeLink}
                onMenuItemClick={handleMenuItemClick}
              />
            ))}
          </ul>
        </nav>
        <button className="bg-primary-base hover:bg-primary-dark text-white rounded-full py-3 px-8 w-11/12 shadow-lg transform transition-colors duration-200">
          Tweet
        </button>
      </div>
      <UserInfo />
    </div>
  );
};

export default Sidebar;
