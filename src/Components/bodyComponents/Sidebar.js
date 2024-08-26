import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const isVisibal = useSelector(store => store.sidebar.isSidebarVisible);
    // const isVisibal = true

    if (!isVisibal) return '';

    return (
        <div className="w-56 text-sm max-h-screen overflow-y-scroll px-2 absolute bg-white">
            {/* 1. Home, Shorts and Subscription */}
            <div className="flex flex-col p-3 border-b">
                <Link
                    to="/"
                    className="flex p-3 hover:bg-gray-100 rounded-xl">
                    <img
                        className="h-5 mr-5"
                        src="https://www.svgrepo.com/show/512352/home-1393.svg"
                        alt=""
                    />
                    Home
                </Link>

                <Link className="flex p-3 hover:bg-gray-100 rounded-xl">
                    <img
                        className="h-5 mr-5"
                        src="https://fonts.gstatic.com/s/i/youtube_outline/youtube_shorts/v8/24px.svg"
                        alt="" />
                    Shorts
                </Link>

                <Link className="flex p-3 hover:bg-gray-100 rounded-xl">
                    <img
                        className="h-5 mr-5"
                        src="https://www.reshot.com/preview-assets/icons/RFBQT93MP8/video-library-RFBQT93MP8.svg"
                        alt="" />
                    Subscription
                </Link>
            </div>

            {/* 2. You and History */}
            <div className="flex flex-col p-3 border-b">
                <Link className="flex p-3 hover:bg-gray-100 rounded-xl">
                    <img
                        className="h-5 mr-5"
                        src="https://www.svgrepo.com/show/512352/home-1393.svg"
                        alt=""
                    />
                    You
                </Link>

                <Link className="flex p-3 hover:bg-gray-100 rounded-xl">
                    <img
                        className="h-5 mr-5"
                        src="https://www.reshot.com/preview-assets/icons/MUTP2R8CW4/refresh-time-MUTP2R8CW4.svg"
                        alt="" />
                    History</Link>
            </div>

            {/* 3. Signin */}
            <div className="flex flex-col p-3 border-b">
                <p>
                    Sign in to like videos, comment and subscribe.
                </p>
                <Link className="flex p-3 bg-gray-100 rounded-full">
                    <img
                        className="h-5 mr-5 rounded-full"
                        src="https://www.svgrepo.com/show/532363/user-alt-1.svg"
                        alt="" />
                    Signin
                </Link>
            </div>

            {/* 4. Explore  */}
            <div className="flex flex-col p-3 border-b">
                <h1 className="font-bold">Explore</h1>
                <div className="flex flex-col">
                    <Link className="flex p-3 hover:bg-gray-100 rounded-xl">
                        <img
                            className="h-5 mr-5"
                            src="https://www.svgrepo.com/show/487392/fire.svg"
                            alt="" />
                        Trending</Link>

                    <Link className="flex p-3 hover:bg-gray-100 rounded-xl">
                        <img
                            className="h-5 mr-5"
                            src="https://www.svgrepo.com/show/533028/bag-shopping.svg"
                            alt="" />
                        Shoping</Link>

                    <Link className="flex p-3 hover:bg-gray-100 rounded-xl">
                        <img
                            className="h-5 mr-5"
                            src="https://www.svgrepo.com/show/532711/music-note.svg"
                            alt="" />
                        Music</Link>

                    <Link className="flex p-3 hover:bg-gray-100 rounded-xl">
                        <img
                            className="h-5 mr-5"
                            src="https://www.svgrepo.com/show/480145/clapperboard-with-play-button-3.svg"
                            alt=""
                        />
                        Films</Link>

                    <Link className="flex p-3 hover:bg-gray-100 rounded-xl">
                        <img
                            className="h-5 mr-5"
                            src="https://www.svgrepo.com/show/326774/radio-outline.svg"
                            alt=""
                        />
                        Live</Link>

                    <Link className="flex p-3 hover:bg-gray-100 rounded-xl">
                        <img
                            className="h-5 mr-5"
                            src="https://www.svgrepo.com/show/533074/gaming-pad-alt-1.svg"
                            alt=""
                        />
                        Gaming</Link>

                    <Link className="flex p-3 hover:bg-gray-100 rounded-xl">
                        <img
                            className="h-5 mr-5"
                            src="https://www.svgrepo.com/show/348759/news-paper.svg"
                            alt=""
                        />
                        News</Link>

                    <Link className="flex p-3 hover:bg-gray-100 rounded-xl">
                        <img
                            className="h-5 mr-5"
                            src="https://www.svgrepo.com/show/533056/trophy.svg"
                            alt=""
                        />
                        Suport</Link>

                    <Link className="flex p-3 hover:bg-gray-100 rounded-xl">
                        <img
                            className="h-5 mr-5"
                            src="https://www.svgrepo.com/show/428085/study-university.svg"
                            alt="" />
                        Course</Link>

                    <Link className="flex p-3 hover:bg-gray-100 rounded-xl">
                        <img
                            className="h-5 mr-5"
                            src="https://www.svgrepo.com/show/156542/clothes-hanging-tool.svg"
                            alt=""
                        />
                        Fation & beauty</Link>

                    <Link className="flex p-3 hover:bg-gray-100 rounded-xl">
                        <img
                            className="h-5 mr-5"
                            src="https://www.svgrepo.com/show/533307/podcast.svg"
                            alt="" />
                        Podcast</Link>
                </div>
            </div>

            {/* 5. More from youtube  */}
            <div className="flex flex-col p-3 border-b">
                <h1 className="font-bold">More from YouTube</h1>
                <div className="flex flex-col">
                    <Link className="flex p-3 hover:bg-gray-100 rounded-xl">
                        <img
                            className="h-5 mr-5"
                            src="https://www.svgrepo.com/show/448261/youtube.svg"
                            alt="" />
                        YouTube Premium</Link>

                    <Link className="flex p-3 hover:bg-gray-100 rounded-xl">
                        <img
                            className="h-5 mr-5"
                            src="https://www.svgrepo.com/show/343535/youtube-music-song-multimedia-audio.svg"
                            alt="" />
                        YouTube Music</Link>

                    <Link className="flex p-3 hover:bg-gray-100 rounded-xl">
                        <img
                            className="h-5 mr-5"
                            src="https://www.svgrepo.com/show/416500/youtube-circle-logo.svg"
                            alt="" />
                        YouTube Kids</Link>
                </div>
            </div>

            {/* Settings */}
            <div className="flex flex-col p-3 border-b">
                <Link className="flex p-3 hover:bg-gray-100 rounded-xl">
                    <img
                        className="h-5 mr-5"
                        src="https://www.svgrepo.com/show/520935/setting-5.svg"
                        alt="" />
                    Settings</Link>

                <Link className="flex p-3 hover:bg-gray-100 rounded-xl">
                    <img
                        className="h-5 mr-5"
                        src="https://www.svgrepo.com/show/532527/flag.svg"
                        alt="" />
                    Report History</Link>

                <Link className="flex p-3 hover:bg-gray-100 rounded-xl">
                    <img
                        className="h-5 mr-5"
                        src="https://www.svgrepo.com/show/355050/help-option.svg"
                        alt="" />
                    Help</Link>

                <Link className="flex p-3 hover:bg-gray-100 rounded-xl">
                    <img
                        className="h-5 mr-5"
                        src="https://www.svgrepo.com/show/521658/feedback.svg"
                        alt=""
                    />
                    Send feedback</Link>
            </div>

            {/* Copyright and T&C */}
            <div className="flex flex-col p-3 border-b">
                <p>
                    AboutPressCopyrightContact usCreatorAdvertiseDevelopers
                </p>
                <p>
                    TermsPrivacyPolicy & SafetyHow YouTube worksTest new features
                </p>
            </div>

        </div>
    );
};

export default Sidebar;
