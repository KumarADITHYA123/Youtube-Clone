import SuggestVideoCard from './SuggestVideoCard';
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Recommended = () => {
  const suggestions = useSelector((store) => store.suggest);
  //console.log(suggestions.suggestions.length)
  const getVideoId = (video) => {
    return video.id?.videoId || video.id;
  };
  return (
    <div className="w-[100%] py-2 px-4">
      {suggestions.suggestions.length > 0 &&
        suggestions.suggestions[0].map((video,index) => (
          <Link to={`/watch?v=${getVideoId(video)}`} key={index}><SuggestVideoCard key={video?.id?.videoId} data={video} /></Link>
        ))}
    </div>
  );
}

export default Recommended;