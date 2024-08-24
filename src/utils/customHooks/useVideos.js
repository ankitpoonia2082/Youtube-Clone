// Custom hook to get videos...
import { YOUTUBE_POPULAR_VIDEOS_API } from "../contents";
import { useState, useEffect } from "react";

const useVideos = () => {
    const [videoData, setVideoData] = useState([]);

    useEffect(
        () => {
            getVideosFunction();
        }, []
    );

    const getVideosFunction = async () => {
        const response = await fetch(YOUTUBE_POPULAR_VIDEOS_API);
        const jsonData = await response.json();
        setVideoData(jsonData?.items);
    };

    return videoData;
};

export default useVideos;