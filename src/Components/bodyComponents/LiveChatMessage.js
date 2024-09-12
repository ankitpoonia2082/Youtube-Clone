// Live Chat message component....

const LiveChatMessage = ({ name, text }) => {

    return (
        <div className="flex p-2 items-center text-sm w-full">
            <img
                className="h-5 mr-1 rounded-full"
                src="https://www.svgrepo.com/show/532363/user-alt-1.svg"
                alt="" />
            <span className="font-semibold mx-2">{name}</span>
            <span className="text-gray-600">{text}</span>
        </div>
    );
};

export default LiveChatMessage;