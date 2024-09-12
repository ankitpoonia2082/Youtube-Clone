// const API_KEY = 'AIzaSyCpfYLU1Qm4kcZPK01TNPWm1o9twy5Rias';
export const API_KEY = 'AIzaSyA6s9zFexI7G-BIK1lg9w9av3V90RpIYvk';

export const YOUTUBE_POPULAR_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=` + API_KEY;

export const Video_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=`;
export const YOUTUBE_VIDEOS = `https://www.googleapis.com/youtube/v3/videos`;


// Youtube search suggestion api...

export const YOUTUBE_SEARCH_SUGGESTION_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// Youtube Comments api...

export const YOUTUBE_COMMENTS_API = `https://www.googleapis.com/youtube/v3/commentThreads?key=${API_KEY}&textFormat=plainText&part=snippet&`;


// Youtube video search Api...

export const YOUTUBE_SEARCH = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=`;

// export const YOUTUBE_LIVE_VIDEOS = `https://youtube.googleapis.com/youtube/v3/liveBroadcasts?part=snippet%2CcontentDetails%2Cstatus&broadcastStatus=active&broadcastType=all&key=` + API_KEY;

export const YOUTUBE_LIVE_VIDEOS = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=25&&regionCode=US&type=video&key=` + API_KEY;


export const OFFSET_LIVE_CHAT = 120;