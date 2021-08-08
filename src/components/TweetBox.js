import React from "react";
import { EmojiIcon, GIFIcon, ImageIcon, PollIcon } from "../icons/icon";

const TweetBox = () => {

  return (
    <div className="flex-1 flex flex-col mt-2 px-2">
      <textarea
        className="w-full text-lg placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent"
        placeholder="What's happening?"
      ></textarea>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex -ml-4">
            <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightets">
              <ImageIcon className="w-6 h-6 text-primary-base" />
            </div>
            <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightets">
              <GIFIcon className="w-6 h-6 text-primary-base" />
            </div>
            <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightets">
              <PollIcon className="w-6 h-6 text-primary-base" />
            </div>
            <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightets">
              <EmojiIcon className="w-6 h-6 text-primary-base" />
            </div>
            <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightets">
              <ImageIcon className="w-6 h-6 text-primary-base" />
            </div>
          </div>
          <button className="bg-primary-base text-white rounded-full px-4 py-2 font-medium">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default TweetBox;
