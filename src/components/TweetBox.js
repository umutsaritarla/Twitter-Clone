import React , {useState} from 'react'
import { EmojiIcon, GIFIcon, ImageIcon, PollIcon, ScheduleIcon } from '../icons/Icon'
import db from '../firebase'
import firebase from 'firebase/compat/app';

const TweetBox = () => {

    const [content , setContent] = useState("");

    const sendTweet = () => {
        if (content !== "") {
           db.collection("feed").add({
            displayName: "Umut Sarıtarla",
            username: "@umutsaritarla",
            content,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            image: "https://media.tenor.com/zzM8flawkjoAAAAC/donkey-swing.gif",
            avatar: "https://pbs.twimg.com/profile_images/1593330025838907394/ZL1OFc3L_400x400.jpg"
           })

           setContent("");

        }
    }

  return (
    <div className='flex flex-col mt-2 px-2 flex-1'>
        <textarea className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent" placeholder='Neler oluyor?' onChange={e => setContent(e.target.value)} value={content}/>
        <div className='flex items-center justify-between'>
            <div className='flex -ml-3'>
                <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest transition duration-200 cursor-pointer'>
                    <ImageIcon className="w-6 h-6 text-primary-base"/>
                </div>

                <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest transition duration-200 cursor-pointer'>
                    <GIFIcon className="w-6 h-6 text-primary-base"/>
                </div>

                <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest transition duration-200 cursor-pointer'>
                    <PollIcon className="w-6 h-6 text-primary-base"/>
                </div>

                <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest transition duration-200 cursor-pointer'>
                    <EmojiIcon className="w-6 h-6 text-primary-base"/>
                </div>

                <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest transition duration-200 cursor-pointer'>
                    <ScheduleIcon className="w-6 h-6 text-primary-base"/>
                </div>
            </div>
            <button className='bg-primary-base text-white rounded-full px-4 py-2 font-medium' onClick={sendTweet}>Tweetle</button>
        </div> 
    </div>
  )
}

export default TweetBox