

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
                   {sender==='robot'&&<div><img className='rounded-circle img-thumbnail mb-4' src="https://supersimple.dev/projects/chatbot/robot.png" width="50" /> 
                    <p className="message_p shadow-sm fw-bold mb-4"> {message}</p>
                    </div>}
                   
                 
                  {sender==='user'&& <div className="div_user"> 
                      
                      <p className="message_p  shadow-sm fw-bold mb-4"> {message}</p>
                       <img className='rounded-circle img-thumbnail mb-4' src="https://supersimple.dev/projects/chatbot/user.png" width="50" /> 
                    </div>}
              </div>

            )}   