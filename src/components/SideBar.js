import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchKey } from "../utils/searchKeySlice";

const SideBar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  const dispatch = useDispatch();
  if (isMenuOpen === false)
    return null
  return (
    <div className="w-108 mb-4 shadow-md absolute bg-gray-900 ml-0 md:w-260 ">
      <Link to="/">
        <div className="flex align-center items-center m-3 w-[150px] md:w-[260px] md:ml-5" onClick={()=>dispatch(setSearchKey(""))}>
          <div className="text-2xl">
            <IoMdHome />
          </div>
          <h3 className="mx-3 text-sm md:mx-5 md:text-lg">Home</h3>
        </div>
      </Link>
      <div className="flex align-center items-center m-3 w-[150px] md:w-[260px] md:ml-5">
        <div className="text-2xl">
          <SiYoutubeshorts />
        </div>
        <h3 className="mx-3 text-sm md:mx-5 md:text-lg">Shorts</h3>
      </div>
      <div className="flex align-center items-center m-3 w-[150px] md:w-[260px] md:ml-5 pb-4">
        <div className="text-2xl">
          <MdOutlineSubscriptions />
        </div>
        <h6 className="mx-3 text-sm md:mx-5 md:text-lg">Subscriptions</h6>
      </div>
      <hr className="mt-4"></hr>
      <div className="flex align-center items-center m-3 w-[150px] md:w-[260px] md:ml-5 pt-4">
        <div className="text-2xl">
          <FaHistory />
        </div>
        <h3 className="mx-3 text-sm md:mx-5 md:text-lg">History</h3>
      </div>
      <div className="flex align-center items-center m-3 w-[150px] md:w-[260px] md:ml-5">
        <div className="text-2xl">
          <MdOutlineWatchLater />
        </div>
        <h3 className="mx-3 text-sm md:mx-5 md:text-lg">Watch Later</h3>
      </div>
      <div className="flex align-center items-center m-3 w-[150px] md:w-[260px] md:ml-5 pb-4">
        <div className="text-2xl">
          <BiLike />
        </div>
        <h6 className="mx-3 text-sm md:mx-5 md:text-lg">Liked Videos</h6>
      </div>
    </div>
  );
}

export default SideBar