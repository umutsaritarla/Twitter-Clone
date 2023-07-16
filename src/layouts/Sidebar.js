import React, { useState } from 'react'
import { ApprovedIcon, ExploreIcon, HomeIcon, ListsIcon, MessagesIcon, MoreIcon, NotificationIcon, ProfileIcon, SavedIcon } from '../icons/Icon'
import twitterLogo from "../images/twitter.svg"
import SideLink from '../components/SideLink';
import UserBox from '../components/UserBox';

const sideLinks = [
  {
    name: "Anasayfa",
    icon: HomeIcon,
  },
  {
    name: "Keşfet",
    icon: ExploreIcon,
  },
  {
    name: "Bildirimler",
    icon: NotificationIcon,
  },
  {
    name: "Mesajlar",
    icon: MessagesIcon,
  },
  {
    name: "Listeler",
    icon: ListsIcon,
  },
  {
    name: "Yer İşaretleri",
    icon: SavedIcon,
  },
  {
    name: "Onaylanmış",
    icon: ApprovedIcon,
  },
  {
    name: "Profil",
    icon: ProfileIcon
  },
  {
    name: "Daha fazla",
    icon: MoreIcon,
  },
];

const Sidebar = () => {

  const [active , setActive] = useState("Home");

  const handleMenuItemClick = (name) => {
    setActive(name);
  }

  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between px-2 w-72 ">
        <div>
          <div className='mt-1 mb-4 flex items-center justify-center w-12 h-12 rounded-full transform transition duration-150 cursor-pointer hover:bg-gray-lightest'>
            <img src={twitterLogo} alt='Twitter Logo' className='w-9 h-9'></img>
          </div>
          
          <nav className='mb-4'>
            <ul>
              {sideLinks.map(({name , icon}) => (
                <SideLink key={name} name={name} Icon={icon} active={active} onMenuItemClick={handleMenuItemClick}/>
              ))}
            </ul>
          </nav>
          <button className='bg-primary-base hover:bg-primary-dark text-white rounded-full shadow-lg py-3 px-8 w-10/12 transform transition-colors duration-200 font-bold'>Tweetle</button>
        </div>
        <UserBox/>
        
    </div>
  )
}

export default Sidebar