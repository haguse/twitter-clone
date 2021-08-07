import React from "react";

const SideLink = ({ name, Icon }) => {
  return (
    <li>
      <a href="!#" className="block cursor-pointer text-lg group mb-2">
        <div className="inline-block">
          <div className="flex items-center group-hover:bg-primary-light group-hover:text-primary-base rounded-full pl-3 px-6 py-3">
            <Icon />
            <span className="ml-3 font-bold">{name}</span>
          </div>
        </div>
      </a>
    </li>
  );
};

export default SideLink;
