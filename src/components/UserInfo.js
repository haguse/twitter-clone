import React from "react";

const UserInfo = () => {
  return (
    <div className="flex justify-between items-center mb-5 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-300">
      <img
        className="w-11 h-11 rounded-full"
        src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
        alt="Profile"
      />
      <div className="flex flex-col">
        <span className="font-bold">Halit Guven Serin</span>
        <span className="text-gray-dark text-sm">@hgserin</span>
      </div>
      <div className="flex space-x-1">
        <div className="w-1 h-1 bg-gray-800 rounded-full" />
        <div className="w-1 h-1 bg-gray-800 rounded-full" />
        <div className="w-1 h-1 bg-gray-800 rounded-full" />
      </div>
    </div>
  );
};

export default UserInfo;
