// Video Card...

const VideoCard = ({ data }) => {
    const { snippet, statistics } = data;
    const { title, channelTitle, thumbnails } = snippet;

    if (!snippet) return ""

    return (
        <div>
            {/* Thumbnale */}
            <img
                className="rounded-lg hover:rounded-none w-96 h-52 bg-gray-200"
                src={thumbnails?.maxres?.url}
                alt="" />

            {/* Logo & Details */}
            <div className="grid grid-flow-col mt-3">
                {/* Logo */}
                <img
                    className="rounded-full h-10 grid-cols-2 border mr-3"
                    src="https://www.svgrepo.com/show/532362/user.svg"
                    alt="Logo"
                />
                {/* Channel Name, views and time*/}
                <div className="grid-cols-10">
                    <h1 className="font-bold mb-2 line-clamp-2">{title}</h1>
                    <div className="text-sm text-gray-600">
                        <h2>{channelTitle}</h2>
                        <h2>{Math.round(statistics?.viewCount / 1000)}K Views</h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default VideoCard;