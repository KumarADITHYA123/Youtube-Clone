import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Videocard from "./videocard";
const SearchPage = () => {
  const videos = useSelector((state) => state.videos.videos);
  return (
    <div className="flex flex-wrap justify-center p-2 m-2">
      <>
        {videos.map((video,index) => (
          <Link
            to={"/watch?v=" + video.id?.videoId || video.id}
            key={index}
          >
            <Videocard info={video} />
          </Link>
        ))}
      </>
    </div>
  );
};

export default SearchPage;
