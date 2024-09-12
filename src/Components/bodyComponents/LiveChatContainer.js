// Container for live chat message 
import LiveChatMessage from "./LiveChatMessage";
import { useEffect, useState } from "react";
import { nameGenerator, stringGenerator } from "../../utils/helperFunctions";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../utils/slices/chatSlice";


const LiveChatContainer = () => {

    const dispatch = useDispatch();
    const liveChat = useSelector(store => store.liveChat.comments)
    const [myComment, setMyComment] = useState('');
    const myName = "Ankit";

    useEffect(() => {
        const newComment = setInterval(() => {
            const name = nameGenerator();
            const comment = stringGenerator(10);
            dispatch(addComment({ name: name, comment: comment }));
        }, 2000);

        return () => clearInterval(newComment);
    })

    const handelAddMyComment = () => {
        dispatch(addComment({ name: myName, comment: myComment }))
        setMyComment('');
    };


    return (
        <div className="border mx-2 rounded-xl w-auto h-full ">
            {/* Heading */}
            <div className="w-full border-b">
                <h1 className="text-lg my-2 mx-3 font-semibold">Live chat</h1>
            </div>

            {/* Comments */}
            <div className="w-80 h-[450px] overflow-y-scroll bg-slate-50 flex-col-reverse">
                {
                    liveChat.map((data, index) => <LiveChatMessage key={index} name={data.name} text={data.comment} />)
                }

            </div>

            {/* Add Comment */}
            <div className="my-2 border rounded-lg p-2 flex justify-between">
                <input
                    value={myComment}
                    className="rounded-xl py-2 px-1 bg-slate-200 w-3/4"
                    onChange={(e) => setMyComment(e.target.value)}
                />
                <button
                    className="rounded-xl py-2 px-3 bg-slate-200"
                    onClick={() => handelAddMyComment()}
                >Send</button>
            </div>
        </div>
    );
};

export default LiveChatContainer;