import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { YOUTUBE_API } from "../utils/constants";
export const fetchVideos = createAsyncThunk(
"videos/fetchVideos", async () => {
    const apiKey = process.env.REACT_APP_YOUR_API_KEY;
    const youtubeAPI = YOUTUBE_API + apiKey;
        const response = await fetch(youtubeAPI);
  if (!response.ok) {
    throw new Error("Failed to fetch videos");
  }
        const videos = await response.json();
        //console.log(videos);
  return videos.items;
});

const initialState = {
  videos: [],
  status: "idle",
  error: null,
};

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    updateVideos: (state, action) => {
      state.videos = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { updateVideos } = videoSlice.actions;

export default videoSlice.reducer;
