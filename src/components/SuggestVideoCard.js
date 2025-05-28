import React from 'react';

const SuggestVideoCard = ({ data }) => {
  const { snippet } = data;
  const { channelTitle, title, thumbnails } = snippet;
  
  return (
    <div className="w-[100%]">
      <div className="w-[100%] flex">
        <img
          className="rounded-lg w-[40%] m-2"
          src={thumbnails.medium.url}
          alt="thumbnail"
        />
        <ul>
          <li className="font-bold py-2">{title}</li>
          <li>{channelTitle}</li>
        </ul>
      </div>
    </div>
  );
};

export default SuggestVideoCard;