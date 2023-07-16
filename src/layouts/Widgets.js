import React from "react";
import { SearchIcon } from "../icons/Icon";
import { Timeline } from "react-twitter-widgets";

const Widgets = () => {
  return (
    <aside className="w-80 ">
      <div className="flex items-center space-x-4 p-3 m-3 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
        <SearchIcon className="w-5 h-5 " />
        <input
          type="text"
          placeholder="Twitter'da ara"
          className="placeholder-gray-dark bg-transparent focus:outline-none w-full text-sm text-black"
        />
      </div>
      <div className="mt-5 px-2">
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "umutsaritarla",
          }}
          options={{
            height: "600",
          }}
        />
      </div>
    </aside>
  );
};

export default Widgets;
