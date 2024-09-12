// Coustom hook to get comments of a video...
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_COMMENTS_API } from "../contents";
import { useState, useEffect } from "react";

const useComments = () => {
    const [searchId] = useSearchParams();
    const [comments, setComments] = useState({});

    const getComments = async (searchId) => {
        const response = await fetch(YOUTUBE_COMMENTS_API + 'videoId=' + searchId.get("v") + '&maxResults=50');
        const jsonData = await response.json();
        setComments(jsonData?.items);
    };

    useEffect(() => {
        getComments(searchId)
    }, []);

    return comments;
};

export default useComments;