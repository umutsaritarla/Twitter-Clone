import React, { useEffect, useState } from "react";
import { PopulerIcon } from "../icons/Icon";
import TweetBox from "../components/TweetBox";
import Divider from "../components/Divider";
import FeedList from "../components/FeedList";
import db from "../firebase";

const Content = () => {

  const [tweets , setTweets] = useState([]);

  useEffect(() => {
    db.collection("feed")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setTweets(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  

  console.log(tweets)

  return (
    <main className="flex-1 flex flex-col border-r border-l ">
      <header className="sticky top-0 flex justify-between items-center p-4 border-b border-gray-extraLight bg-white z-10">
        <span className="text-xl text-gray-900 font-bold">Anasayfa</span>
        <PopulerIcon className="w-6 h-6 text-primary-base" />
      </header>

      <div className="flex px-4 py-3 space-x-4">
        <img
          src="https://pbs.twimg.com/profile_images/1593330025838907394/ZL1OFc3L_400x400.jpg"
          alt="Profile"
          className="w-11 h-11 rounded-full"
        />

        <TweetBox />
      </div>

      <Divider />

      {/* feed */}
      <FeedList tweets = {tweets}/>
    </main>
  );
};

export default Content;
