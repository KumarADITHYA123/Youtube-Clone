import { useEffect, useState, useCallback } from 'react';
import React from 'react'
import CommentList from './CommentList';
import { YOUTUBE_COMMENT_API } from "../utils/constants";

export const CommentPart = ({ videoid }) => {
  const [commentData, setComments] = useState();
  const apiKey = process.env.REACT_APP_YOUR_API_KEY;

  const getComments = useCallback(async () => {
    const url = YOUTUBE_COMMENT_API + videoid + "&key=" + apiKey;
    const data = await fetch(url);
    const json = await data.json();
    setComments(json?.items);
    //console.log(json?.items);
  }, [videoid, apiKey]);

  useEffect(() => {
    getComments();
  }, [getComments]);

  return (
    <div className='p-2 w-[100%]'>
      <h1 className='font-bold text-2xl'>Comments:-</h1>
      {commentData && <CommentList data={commentData} />}
    </div>
  )
}
