import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useLiveVideos from "../../utils/customHooks/useLiveVideos";


const LiveVideosContainer = () => {

    const videosData = useLiveVideos();

    return videosData && !videosData.length ? "" : (

        <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1 p-10">
            {
                videosData.map((data) => <Link to={'/watchlive?v=' + data.id?.videoId} key={data.id?.videoId}>
                    <VideoCard key={data.id} data={data} />
                </Link>)
            }
        </div>
    );
};

export default LiveVideosContainer;