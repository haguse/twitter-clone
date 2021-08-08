import React from "react";
import { PopulerIcon } from "../icons/icon";
import TweetBox from "../components/TweetBox";
import Divider from "../components/Divider";
import FeedList from "../components/FeedList";

const Content = () => { 

  return (
    <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight">
      <header className="sticky top-0 z-10 bg-white flex justify-between items-center p-4 border-b border-gray-extraLight">
        <span className="font-bold text-xl text-gray-900">Home</span>
        <PopulerIcon className="w-6 h-6 text-primary-base" />
      </header>
      <div className="flex px-4 py-3 space-x-5">
        <img
          className="w-11 h-11 rounded-full"
          src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
          alt="Profile"
        />
        <TweetBox />
      </div>
      <Divider />

    {/* Feed */}
    
    <FeedList/>
    </main>
  );
};

export default Content;
