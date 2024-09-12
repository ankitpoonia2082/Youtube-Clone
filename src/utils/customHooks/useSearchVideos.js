import { YOUTUBE_SEARCH, API_KEY } from "../contents";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";



const useSearchVideos = (searchQuery) => {
    const [data, setData] = useState([]);
    const [query] = useSearchParams();


    useEffect(
        () => {
            const result = getSearchVideos(query.get("query"));
            setData(result);
        }, [query]
    );

    const getSearchVideos = async (searchQuery) => {
        try {
            const response = await fetch(YOUTUBE_SEARCH + searchQuery + "&key=" + API_KEY);
            const jsonData = await response.json();
            setData(jsonData?.items);
        } catch (err) {
            console.error("Error fetching search results:", err);
        }
    };

    return data;
};

export default useSearchVideos;