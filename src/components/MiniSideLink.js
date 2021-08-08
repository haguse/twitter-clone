import React from "react";

const SideLink = ({ name, Icon, active, onMenuItemClick }) => {
  const isActive = active === name;

  return (
    <li onClick={() => onMenuItemClick(name)}>
      <a
        href={name.toLowerCase()}
        className="block text-lg group mb-1 pointer-events-none cursor-pointer"
      >
        <div className="inline-block">
          <div
            className={`flex items-center group-hover:bg-primary-light group-hover:text-primary-base rounded-full pl-3 px-6 py-3 ${
              isActive && "text-primary-base"
            }`}
          >
            <Icon />
          </div>
        </div>
      </a>
    </li>
  );
};

export default SideLink;
