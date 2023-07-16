import React from "react";

const SideLink = ({ name, Icon , active , onMenuItemClick }) => {

  const isActive = active === name;

  return (
    <li className="group" onClick={() => onMenuItemClick(name)}>
      <a href={name.toLowerCase()} className="block cursor-pointer text-xl mb-2">
        <div className="inline-block">
          <div className={`flex items-center group-hover:bg-gray-200 rounded-full pl-3 pr-8 py-3 transform transition duration-150
          
          
          ${isActive? "font-bold" : ""}

          `}>
            <Icon />
            <span className="ml-4 font-bold">{name}</span>
          </div>
        </div>
      </a>
    </li>
  );
};

export default SideLink;
