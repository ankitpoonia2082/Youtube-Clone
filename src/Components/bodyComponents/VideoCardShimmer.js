// Video Card Shimmer...

export const VideoCardShimmer = () => {

    return (
        <div>
            {/* Thumbnale */}
            <div
                className="rounded-md bg-gray-100 h-52 w-80"
            ></div>

            {/* Logo & Details */}
            <div className="grid grid-flow-col mt-3">

                {/* Logo */}
                <div
                    className="rounded-full h-10 w-10 grid-cols-2 bg-gray-100 mr-3"
                ></div>

                {/* Channel Name, views and time*/}
                <div className="flex justify-start">
                    <div className="mb-2 bg-gray-100 rounded-sm w-full h-5 mr-3"></div>

                    <div>
                        <div className="w-1/4 h-3 bg-gray-100 rounded-sm mb-2"></div>
                        <div className="w-1/3 h-3 bg-gray-100 rounded-sm"></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

const CardShimmers = () => (
    <div className="grid grid-cols-3 gap-5 m-10 items-center">
        {
            Array(10)
                .fill("")
                .map((e, index) =>
                    <VideoCardShimmer key={index} />
                )
        }
    </div>
);

export default CardShimmers;