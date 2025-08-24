import React, { useEffect, useState } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../utils/chatSlice";
import { generateName, randomSentence } from "../utils/helper";


const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState();

    const dispatch = useDispatch();

    const chatMessage = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            // console.log("hello from");

            dispatch(
                addMessage({
                    name : generateName(),
                    message : randomSentence()
                })
            )
            
        }, 10000);
    
        return () => clearInterval(i);
    }, [dispatch])

  return (
    <div className="mx-2 w-full">
        <div className="flex flex-col h-[600px] border border-black bg-gray-100 rounded-2xl shadow-lg">
            <div className="flex-1 overflow-y-scroll flex flex-col-reverse p-5">
                <div>
                    {chatMessage.map((c, i) => (
                    <ChatMessage
                        key={"chatmsg007" + i}
                        name={c.name}
                        message={c.message}
                    />
                    ))}
                </div>
            </div>
            <form 
                className="p-2 border-t border-gray-400 flex gap-2"
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(
                        addMessage({
                            name : "Rehan Fazal",
                            message : liveMessage
                        })
                    )
                    setLiveMessage("") 
                }} 
            >
                <input
                    className="flex-1 border border-gray-400 rounded-md p-2"
                    type="text"
                    value={liveMessage}
                    onChange={(e) => setLiveMessage(e.target.value)}
                    placeholder="Type your message..."
                />
                <button 
                    className="px-4 bg-green-800 text-white rounded-md shadow hover:bg-green-600"
                >
                Send
                </button>
            </form>
        </div>
    </div>
  )
}

export default LiveChat