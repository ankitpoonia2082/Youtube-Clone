// Comment card...

const CommentCard = ({ data }) => {

    const { authorDisplayName, authorProfileImageUrl, publishedAt, textDisplay } = data;

    const authorProfile = authorProfileImageUrl || 'https://www.svgrepo.com/show/532362/user.svg';

    return (
        <div className="flex p-2 my-4 bg-gray-100 rounded-md text-sm items-center">
            <img
                className="h-9 rounded-full border mr-4"
                src={authorProfile}
                alt="" />
            <div>
                <p className="font-bold my-2">{authorDisplayName}</p>
                <p className="line-clamp-3">{textDisplay}</p>
            </div>
        </div>
    );
};

export default CommentCard;