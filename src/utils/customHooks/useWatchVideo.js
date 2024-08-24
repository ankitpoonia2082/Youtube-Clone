// 

import { Video_API, API_KEY } from "../contents";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";


const useWatchVideo = () => {
    const [videoData, setVideoData] = useState({});
    const [searchId] = useSearchParams();


    const getVideo = async () => {
        const response = await fetch(Video_API + searchId.get("v") + "&key=" + API_KEY);
        const jsonData = await response.json();
        setVideoData(jsonData?.items[0]);
    };

    useEffect(() => {
        getVideo();
    }, [searchId])

    return videoData;
};

export default useWatchVideo;