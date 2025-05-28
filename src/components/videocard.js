import React from "react";

const Videocard = ({ info }) => {
  //console.log(info);
  const { snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-3xl">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
      </ul>
    </div>
  );
};

export default Videocard;
