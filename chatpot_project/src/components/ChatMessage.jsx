

export function ChatMessage({message,sender}){
              //const message=props.message;
              //const sender =props.sender;
              /*
              if(sender==='robot'){

                    return(
                    <div>
                        <img src="https://supersimple.dev/projects/chatbot/robot.png" width="50" /> 
                      {message}
                    
                  </div>

               )
             
              }
                */
            return(
                <div>
                   {sender==='robot'&&<div><img src="https://supersimple.dev/projects/chatbot/robot.png" width="50" /> 
                    <p className="message_p"> {message}</p>
                    </div>}
                   
                 
                  {sender==='user'&& <div className="div_user"> 
                      
                      <p className="message_p"> {message}</p>
                       <img className='user_img' src="https://supersimple.dev/projects/chatbot/user.png" width="50" /> 
                    </div>}
              </div>

            )}   