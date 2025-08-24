import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch } from 'react-redux'
import { addMessage } from '../utils/chatSlice';


const LiveChat = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const i = setInterval(() => {
            console.log("hello from");

            dispatch(
                addMessage({
                    name : "Rehan Fazal",
                    message : "This is sparta 🪓"
                })
            )
            
        }, 2000);
    
        return () => clearInterval(i);
    }, [])

  return (
    <div 
        className='ml-3 p-5 border border-black w-full h-[600px] bg-gray-100 rounded-2xl shadow-lg'
    >
       <ChatMessage 
            name="Rehan Fazal"
            message="This is sparta 🪓"
        />
    </div>
  )
}

export default LiveChat