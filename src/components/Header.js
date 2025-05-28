import React from "react";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { MdMic } from "react-icons/md";
import { MdCreateNewFolder } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appslice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { updateVideos } from "../utils/videoSlice";
import { YOUTUBE_SEARCH_RESULTS_API } from "../utils/constants";
import { setSearchKey } from "../utils/searchKeySlice";
import { useNavigate } from "react-router-dom";
import ToggleButton from './ToggleButton';

const Header = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const cacheSearch = useSelector(store => store.search);
  const searchKey=useSelector(store=>store.searchKey.searchKey)
  const isDarkMode = useSelector(store => store.mode.isDarkMode);
  const apiKey = process.env.REACT_APP_YOUR_API_KEY;
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (cacheSearch[searchKey]) {
        setSuggestions(cacheSearch[searchKey]);
      }
      else {
        getSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchKey]);

  const getSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchKey
      );
      const json = await data.json();
      setSuggestions(json[1]);
      dispatch(cacheResults({
        [searchKey]: json[1],
      }));
    } catch (err) {
      console.log("Error in get suggestions");
    }
  };
  const fetchData = async (s) => {
    const data = await fetch(
      YOUTUBE_SEARCH_RESULTS_API + s + "&key=" + apiKey
    );
    const json = await data.json();
    dispatch(updateVideos(json.items));
  };
  const handleSearchQuery = (s) =>
  {
    dispatch(setSearchKey(s));
    fetchData(s);
    setShowSuggestions(false);
    navigate("/results");
  }
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-0 shadow-xl text-white w-full bg-black">
      <div className="col-span-1 flex m-2">
        <div
          className="my-auto text-2xl md:mx-1"
          onClick={() => toggleMenuHandler()}
        >
          <GiHamburgerMenu />
        </div>
        <a href="/">
          <img
            className="h-12 mx-2 pt-1 min-w-[72px] "
            src="https://cdn.gtricks.com/2021/04/how-to-enable-youtube-dark-mode-on-pc-and-android-ios-1280x720.jpg"
            alt="youtube-icon"
          />
        </a>
      </div>
      <div className="py-auto items-center justify-center align-center flex w-auto">
        <div className=" w-1/2 min-w-[84px]  center border bg-gray-900 border-gray-900 rounded-l-3xl h-9">
          <input
            className="pl-5 w-full center border bg-gray-900 border-gray-900 rounded-l-3xl h-9"
            type="text"
            placeholder="Search"
            value={searchKey}
            onChange={(e) => dispatch(setSearchKey(e.target.value))}
            onFocus={() => setShowSuggestions(true)}
          />
          {showSuggestions && suggestions.length !== 0 && (
            <div className=" w-[490px]  shadow-xl absolute z-90">
              <ul className="pl-2 bg-black text-white rounded-lg border border-gray-900">
                {suggestions.map((s, index) => (
                  <li
                    key={index}
                    className="py-2 shadow-sm hover:bg-gray-800 "
                    onClick={() => handleSearchQuery(s)}
                  >
                    🔍 {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <button
          className="border border-gray-900   bg-gray-900 center rounded-r-3xl h-9"
          onClick={() => handleSearchQuery(searchKey)}
        >
          <div className="mx-1 p-1 text-2xl">
            <IoIosSearch />
          </div>
        </button>
        <button className="border bg-gray-900 border-gray-900 rounded-full w-9 h-9 m-2 hidden md:flex">
          <div className="text-xl m-1 p-1">
            <MdMic />
          </div>
        </button>
      </div>
      <div className="col-span-1 justify-end hidden md:flex">
        <button className="text-2xl m-2 p-2">
          <MdCreateNewFolder />
        </button>
        <button className="text-2xl m-2 p-2">
          <FaRegBell />
        </button>
        <button className="text-2xl m-2 p-2">
          <FaUserCircle />
        </button>
      </div>
    </div>
  );
};

export default Header;
