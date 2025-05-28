import React from "react";
import { YOUTUBE_SEARCH_RESULTS_API } from "../utils/constants";
import { updateVideos } from "../utils/videoSlice";
import { useDispatch } from "react-redux";
import { setSearchKey } from "../utils/searchKeySlice";
import { useNavigate } from "react-router-dom";

const apiKey = process.env.REACT_APP_YOUR_API_KEY;
const EachButton = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchData = async (s) => {
    const data = await fetch(YOUTUBE_SEARCH_RESULTS_API + s + "&key=" + apiKey);
    const json = await data.json();
    dispatch(updateVideos(json.items));
  };
  const handleSearchQuery = (s) => {
    dispatch(setSearchKey(s));
    fetchData(s);
    navigate("/results");
  };
  return (
    <div>
      <p
        className="flex m-2 px-5 py-2 bg-gray-900 rounded-lg text-xs font-bold text-white whitespace-nowrap hover:text-black hover:bg-white"
        onClick={() => fetchData(props.name)}
      >
        {props.name}
      </p>
    </div>
  );
};

export default EachButton;
