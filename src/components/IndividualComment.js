import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { BiLike } from 'react-icons/bi';
import { BiDislike } from 'react-icons/bi';
const IndividualComment = ({ data }) => {
    const {authorDisplayName, textDisplay,likeCount} = data;
    return (
      <div className="flex shadow-sm p-2 rounded-lg m-2 py-auto w-[100%]">
        <button className="text-3xl m-2 p-2">
          <FaUserCircle />
        </button>
        <div className="">
          <h1 className="font-bold text-sm my-1">{authorDisplayName}</h1>
          <h2 className="text-sm break-all">{textDisplay}</h2>
          <div className="flex m-1">
            <div className="m-1">
              <BiLike />
            </div>
            {likeCount!==0 && likeCount}
            <div className='m-1'>
              <BiDislike />
            </div>
            <div className='m-1 text-xs'>
              <button>Reply</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default IndividualComment