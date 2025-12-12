import { useState } from "react";
import { Chatbot } from "supersimpledev";
import './ChatInput.css'
import "bootstrap/dist/css/bootstrap.css"

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
                  <input className='form-control fw-bold border-2 hover shadow-lg w-75' onChange={saveInputText} placeholder="Send a message to chatbot"  value={inputText}/>
                  <button className='btn btn-outline-success btn-lg ' onClick={sendMessage}> send</button>
              </div>

            ) }//chat input end