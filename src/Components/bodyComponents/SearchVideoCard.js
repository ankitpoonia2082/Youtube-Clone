// Video card for searched results...

const SearchVideoCard = ({ data }) => {
    const { snippet } = data;
    const { title, channelTitle, thumbnails } = snippet;

    if (!snippet) return ""

    return (
        <div className="flex w-full my-5">
            {/* Thumbnale */}
            <img
                className="rounded-lg hover:rounded-none w-2/5 h-64 bg-gray-200"
                src={thumbnails?.high?.url}
                alt="" />

            <div className=" mt-3 w-1/2 mx-5">
                {/* Channel Name, views and time*/}
                <h1 className="font-bold mb-2 line-clamp-2">{title}</h1>
                {/* <h2>{Math.round(statistics?.viewCount / 1000)}K Views</h2> */}
                <div className="flex text-sm text-gray-600 items-center my-5">
                    {/* Logo */}
                    <img
                        className="rounded-full h-10 w-10 grid-cols-2 border mr-3"
                        src={thumbnails?.default?.url}
                        alt="Logo"
                    />
                    <h2>{channelTitle}</h2>
                </div>
                <p className="line-clamp-2 my-5 text-sm text-gray-600">{snippet?.description}</p>

            </div>
        </div>
    );
};

export default SearchVideoCard;