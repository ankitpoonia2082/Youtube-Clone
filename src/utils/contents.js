// const API_KEY = 'AIzaSyCpfYLU1Qm4kcZPK01TNPWm1o9twy5Rias';
export const API_KEY = 'AIzaSyA6s9zFexI7G-BIK1lg9w9av3V90RpIYvk';

export const YOUTUBE_POPULAR_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=` + API_KEY;

export const Video_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=`;
export const YOUTUBE_VIDEOS = `https://www.googleapis.com/youtube/v3/videos`;


// export const YOUTUBE_SEARCH_SUGGESTION_API = "https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=";

export const YOUTUBE_SEARCH_SUGGESTION_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_COMMENTS_API = `https://www.googleapis.com/youtube/v3/commentThreads?key=${API_KEY}&textFormat=plainText&part=snippet&`;