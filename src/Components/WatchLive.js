import useWatchVideo from "../utils/customHooks/useWatchVideo";
import { likeIcon, dislikeIcon } from "../utils/assets/likeDislike";
import LiveChatContainer from "./bodyComponents/LiveChatContainer";

const WatchLivePage = () => {
    const videoData = useWatchVideo();
    if (!videoData?.id) return '';

    const { snippet, statistics } = videoData;
    const { title, channelTitle } = snippet;

    return (
        <div className="p-5 w-full">
            {/* Video */}
            <div className="w-full h-[500px] flex rounded-xl mb-5">
                <iframe
                    className="w-9/12 h-full rounded-2xl"
                    src={"https://www.youtube.com/embed/" + videoData.id}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
                    title="youtube"
                    allowFullScreen>
                </iframe>
                {/* Live Chats */}
                {/* Data / messages */}
                <div className="">
                    <LiveChatContainer />
                </div>
            </div>

            {/* Details */}
            <div>
                <h1 className="font-bold text-lg">{title}</h1>

                {/* Channel Details */}
                <div className="flex justify-between items-center my-3">

                    <div className=" grid grid-flow-col items-center gap-3">

                        {/* Channel Logo */}
                        <div className="grid-cols-1">
                            <img
                                src="https://www.svgrepo.com/show/532363/user-alt-1.svg"
                                className="h-10 rounded-full border"
                                alt="" />
                        </div>

                        {/* Channel Name and Subscribers */}
                        <div className="w-auto">
                            <h3 className="font-bold">{channelTitle}</h3>
                            <p className="text-sm text-gray-600">Subscribers</p>
                        </div>

                        {/* Subscribe Button */}
                        <div className="">
                            <button className=" rounded-full px-2 py-1 bg-black text-white">Subscribe</button>
                        </div>

                    </div>

                    {/* Like, dislike etc */}
                    <div className="grid grid-flow-col gap-5 items-center my-3">

                        {/* Likes and Dislike */}
                        <div className="flex">
                            {/* Like */}
                            <button className="bg-gray-200 rounded-l-full px-2 py-1 flex border border-r-grey-400">
                                <img src={likeIcon} alt="Like" className="h-6 mr-2" />
                                {Math.round(statistics?.likeCount / 1000)}K
                            </button>
                            {/* Dislike */}
                            <button className="bg-gray-200 rounded-r-full px-2 py-1 flex">
                                <img src={dislikeIcon} alt="Dislike" className="h-6 mr-2 scale-x-[-1]" />
                            </button>
                        </div>

                        {/* Share */}
                        <div className="" >
                            <button className="bg-gray-200 rounded-full px-2 py-1 flex">
                                <img src="https://www.svgrepo.com/show/522661/share.svg" className="h-6 mr-2" alt="" />
                                Share</button>
                        </div>

                        {/* 3Dot menu */}
                        <div className="">
                            <button className="bg-gray-200 rounded-full px-1 py-2">• • •</button>
                        </div>

                    </div>
                </div>

                {/* Views, disc, uploaded ago */}
                <div className="bg-gray-200 rounded-2xl p-3 ">
                    {/* Views uploaded etx */}
                    <div>
                        <h3 className="font-bold">{Math.round(statistics.viewCount / 1000)}K Views</h3>
                        <h5 className="font-bold text-gray-600">2 Days ago</h5>
                    </div>

                    {/* Discription */}
                    <div className="">
                        <p className="line-clamp-4">{snippet?.description}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};


export default WatchLivePage;