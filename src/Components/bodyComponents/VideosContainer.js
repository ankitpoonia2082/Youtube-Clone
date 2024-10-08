// Videos Container...
import FilterBar from "./FilterBar";
import useVideos from "../../utils/customHooks/useVideos"
import VideoCard from "./VideoCard";
import CardShimmers from "./VideoCardShimmer";
import { Link } from "react-router-dom";

const VideosContainer = () => {
    const videoData = useVideos();

    return !videoData.length ? <CardShimmers /> : (
        <div>
            <div className="w-screen">
                <FilterBar />
            </div>
            <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1 p-10">
                {
                    videoData.map((data) => <Link to={'/watch?v=' + data.id} key={data.id}>
                        <VideoCard key={data.id} data={data} />
                    </Link>)
                }
            </div>
        </div>
    );
};

export default VideosContainer;