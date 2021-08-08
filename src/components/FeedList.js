import React from "react";
import { LikeIcon, ReplyIcon, ReTweetIcon, ShareIcon } from "../icons/icon";

const tweets = ["Second Tweet", "First Tweet"]

const FeedList = () => {
  return (
    tweets.map ((tweet, id) => (
      <article key={id} className="flex space-x-3 border-b border-gray-extraLight px-4 py-3 cursor-pointer">
      <img
        src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
        alt="Profile"
        className="w-11 h-11 rounded-full"
      />
      <div className="flex-1">
        <div className="flex items-center text-sm">
          <h4 className="font-bold">Halit Güven Serin</h4>
          <span className="text-gray-dark ml-3">@hgserin</span>
          <div className="mx-2 bg-gray-dark h-1 w-1 border roundedfull"></div>
          <span className="text-gray-dark">... m ago</span>
        </div>
        <p className="mt-2 text-gray-900 text-sm">{tweet}</p>
        <ul className="-ml-1 mt-3 flex justify-between max-w-md">
          <li className="group flex items-center space-x-1 text-gray-dark text-sm">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light">
              <ReplyIcon className="w-5 h-5 group-hover:text-primary-base" />
            </div>
            <span className="group-hover:text-primary-base">77</span>
          </li>
          <li className="group flex items-center space-x-1 text-gray-dark text-sm">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-200">
              <ReTweetIcon className="w-5 h-5 group-hover:text-green-400" />
            </div>
            <span className="group-hover:text-green-400">77</span>
          </li>
          <li className="group flex items-center space-x-1 text-gray-dark text-sm">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-red-400">
              <LikeIcon className="w-5 h-5 group-hover:text-red-600" />
            </div>
            <span className="group-hover:text-red-600">77</span>
          </li>
          <li className="group flex items-center space-x-1 text-gray-dark text-sm">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light">
              <ShareIcon className="w-5 h-5 group-hover:text-primary-base" />
            </div>
          </li>
        </ul>
      </div>
    </article>
    ))
  );
};

export default FeedList;
