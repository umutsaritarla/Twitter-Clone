import React from "react";
import { LikeIcon, ReTweetIcon, ReplyIcon, ShareIcon } from "../icons/Icon";

const FeedItem = ({
  avatar,
  content,
  displayName,
  image,
  timestamp,
  username,
}) => {
  return (
    <article className="flex space-x-3 border-b border-gray-extraLight px-4 py-3 cursor-pointer">
      <img src={avatar} alt="Profile" className="w-11 h-11 rounded-full" />
      <div className="flex-1">
        <div className="flex items-center text-sm">
          <h4 className="font-bold">{displayName}</h4>
          <span className="ml-2 text-gray-dark">{username}</span>
          <div className="mx-2 bg-gray-dark  h-1 w-1 border rounded-full"></div>
          <span className="text-gray-dark">
            {timestamp?.toDate().toLocaleTimeString("tr-TR")}
          </span>
        </div>
        <p className="mt-2 text-gray-900 text-base">{content}</p>
        {image && (
            <img src={image} className="my-2 rounded-xl"/>
        )}

        <ul className="-ml-1 flex justify-between max-w-md">
            <li className="flex items-center space-x-3 text-gray-dark text-sm group ">
                <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light">
                    <ReplyIcon className="w-5 h-5 group-hover:text-primary-base"/>
                </div>
                <span className="group-hover:text-primary-base">128</span>
            </li>

            <li className="flex items-center space-x-3 text-gray-dark text-sm group ">
                <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-200">
                    <ReTweetIcon className="w-5 h-5 group-hover:text-green-400"/>
                </div>
                <span className="group-hover:text-green-400">86</span>
            </li>

            <li className="flex items-center space-x-3 text-gray-dark text-sm group ">
                <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-pink-200">
                    <LikeIcon className="w-5 h-5 group-hover:text-pink-400"/>
                </div>
                <span className="group-hover:text-pink-400">654</span>
            </li>

            <li className="flex items-center space-x-3 text-gray-dark text-sm group ">
                <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light">
                    <ShareIcon className="w-5 h-5 group-hover:text-primary-base"/>
                </div>
                <span className="group-hover:text-primary-base">456</span>
            </li>

            
        </ul>
      </div>
    </article>
  );
};

export default FeedItem;
