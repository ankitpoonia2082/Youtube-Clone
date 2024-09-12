// Get live Videos list...
import { useEffect, useState } from "react";
import { YOUTUBE_LIVE_VIDEOS } from "../contents";

const useLiveVideos = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getLiveVideos();
    }, [])


    const getLiveVideos = async () => {
        const response = await fetch(YOUTUBE_LIVE_VIDEOS);
        const jsonData = await response.json();
        setData(jsonData?.items);
    };
    return data;
};

export default useLiveVideos;