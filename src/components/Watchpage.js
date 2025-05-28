import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appslice";
import { setSuggestions } from "../utils/suggestSlice";
import { useSearchParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { RiShareForwardLine } from "react-icons/ri";
import { TfiDownload } from "react-icons/tfi";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { CommentPart } from "./CommentPart";
import LiveChat from "./LiveChat";
import Recommended from "./Recommended";

const Watchpage = () => {
  const [searchParams] = useSearchParams();
  const videoid = searchParams.get("v");
  const [live, setLive] = useState(false);
  const [isSubscribed, setSubscribed] = useState(0);
  const apiKey = process.env.REACT_APP_YOUR_API_KEY;
  const [videodata, setData] = useState();
  const dispatch = useDispatch();
  const [suggestData, setSuggestData] = useState([]);

  const fetchSuggestions = async (channel) => {
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + channel +
      "&type=video&key=" + apiKey
    );
    const json = await data.json();
    setSuggestData(json.items);
  };

  const getData = async () => {
    const url = YOUTUBE_VIDEO_API + videoid + "&key=" + apiKey;
    const data = await fetch(url);
    const json = await data.json();
    setData(json);
    if (json?.items[0]?.snippet?.liveBroadcastContent === "live") {
      setLive(true);
    }
  };

  const handleSubscribe = () => {
    setSubscribed(!isSubscribed);
  };

  useEffect(() => {
    dispatch(closeMenu());
    getData();
  }, [videoid, dispatch]);

  useEffect(() => {
    if (videodata?.items?.[0]?.snippet?.channelTitle) {
      fetchSuggestions(videodata.items[0].snippet.channelTitle);
    }
  }, [videodata, apiKey]);

  useEffect(() => {
    dispatch(setSuggestions(suggestData));
  }, [suggestData, dispatch]);

  return (
    <div className="w-full bg-black">
      <div className="px-5 flex w-[100%] flex-col md:flex-row">
        <div className="md:w-[65%] w-full">
          <iframe
            width="100%"
            height="500"
            src={"https://www.youtube.com/embed/" + videoid}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="px-4 my-5 flex flex-col w-[100%]">
            <div className="font-bold text-xl">
              {videodata?.items?.[0]?.snippet?.title}
            </div>
            <div className="flex align-center w-full flex-col md:flex-row">
              <div className="flex justify-between md:justify-normal">
                <div className="flex">
                  <div className="my-auto items-center text-3xl">
                    <FaUserCircle />
                  </div>
                  <div className="flex flex-col">
                    <div className="p-1 m-1 mb-0 pb-0 text-lg w-[250px]">
                      <h1>{videodata?.items?.[0]?.snippet?.channelTitle}</h1>
                    </div>
                    <div className="py-1 my-1 px-1 mx-1 text-sm flex-grow">
                      <h1>
                        {videodata?.items?.[0]?.statistics?.viewCount + " views"}
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="m-1 p-1 items-center hidden md:flex">
                  <button
                    className={`text-black font-bold rounded-3xl w-[100px] h-10 ${
                      isSubscribed ? "bg-gray-600" : "bg-white"
                    }`}
                    onClick={handleSubscribe}
                  >
                    {isSubscribed ? "Subscribed" : "Subscribe"}
                  </button>
                </div>
              </div>
              <div className="flex w-full md:w-[100%] md:justify-center mr-auto">
                <div className="flex md:items-center">
                  <div className="flex mx-2 px-2 h-8 rounded-full bg-gray-900">
                    <button className="border m-1 text-xl border-black">
                      <BiLike />
                    </button>
                    <div className="w-[1px] bg-black"></div>
                    <button className="border m-1 text-xl bg-gray-900 border-black">
                      <BiDislike />
                    </button>
                  </div>
                  <div className="">
                    <button className="bg-gray-900 rounded-3xl mx-2 px-2 h-8">
                      <div className="flex text-lg">
                        <RiShareForwardLine className="m-auto" />
                        <h1 className="px-2 mx-1 text-sm">Share</h1>
                      </div>
                    </button>
                  </div>
                  <div className="align-center justify-center items-center">
                    <button className="bg-gray-900 rounded-full mx-2 px-3 h-8">
                      <div className="flex text-lg">
                        <TfiDownload className="m-auto" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {!live && <CommentPart videoid={videoid} className="w-[100%]" />}
        </div>
        <div className="md:w-[35%] w-[100%]">
          {live && <LiveChat />}
          <Recommended />
        </div>
      </div>
    </div>
  );
};

export default Watchpage;
