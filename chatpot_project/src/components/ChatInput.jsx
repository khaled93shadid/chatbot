import { useState } from "react";
import { Chatbot } from "supersimpledev";
import './ChatInput.css'

export function ChatInput({chatMessages,setChatMessages}){
        const [inputText,setInputText]=useState('');
         function saveInputText(event){
         setInputText(event.target.value)
         
         }
        function sendMessage(){
          const newChatMessages =[...chatMessages,{ message:inputText , sender:'user', id:crypto.randomUUID() }]
           setChatMessages(newChatMessages)
           const response= Chatbot.getResponse(inputText)
           setChatMessages([...newChatMessages,{ message:response , sender:'robot', id:crypto.randomUUID() }])
           setInputText('')
        }
            return(
                <div className="input_flex">
                  <input className='input_chatbot' onChange={saveInputText} placeholder="Send a message to chatbot" size="30" value={inputText}/>
                  <button className='button_chatbot' onClick={sendMessage}> send</button>
              </div>

            ) }//chat input end