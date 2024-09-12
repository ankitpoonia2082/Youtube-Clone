//Search Videos Container...
import CardShimmers from "./VideoCardShimmer";
import { Link } from "react-router-dom";
import SearchVideoCard from "./SearchVideoCard";
import useSearchVideos from "../../utils/customHooks/useSearchVideos";


const SearchVideosContainer = () => {

    const searchVideoData = useSearchVideos();

    return !searchVideoData.length ? <CardShimmers /> : (
        <div className=" p-10">
            {
                searchVideoData.map((data) =>
                    <Link
                        key={data?.id?.videoId || data?.id}
                        to={'/watch?v=' + data.id?.videoId}
                    >
                        <SearchVideoCard
                            key={data?.id?.videoId}
                            data={data} />
                    </Link>)
            }
        </div>
    );
};

export default SearchVideosContainer;