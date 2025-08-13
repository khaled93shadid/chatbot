import {useRef,useEffect } from "react"
import {ChatMessage} from './ChatMessage'



function ChatMessages({chatMessages}){
         const chatMessagesRef = useRef(null)
         useEffect(()=>{
             const containerElem=chatMessagesRef.current
             if(containerElem){containerElem.scrollTop=containerElem.scrollHeight }   
         },[chatMessages])
       

        return(
          <div className="chatMessages"   ref={chatMessagesRef}>
          
                {chatMessages? chatMessages.map((chatMessage)=>{
              return( <ChatMessage message={chatMessage.message} sender={chatMessage.sender} key={chatMessage.id} /> )
           }):<p className="welcome_msg">Welcome to the chatbot project! Send a message using the textbox above.</p> }
          </div>
        )
       }  //chatMessages end 

       export default ChatMessages