const chatbox=document.getElementById('chat-box');
const userinput=document.getElementById('user-input');

const predefinedqa={
    "q1":"a1",
    "q2":"a2",
    "q3":"a3",
    "q4":"a4",
    "q5":"a5",
    }

    function sendMessage(){
        const userMessage=userinput.value.trim();
        displayMessage(userMessage);
        const answer=predefinedqa[userMessage];
        if(answer){
            displayMessage(answer);
        }else{
            displayMessage("Sorry, I don't understand your question.");
        }

    function displayMessage(Message){
        const MessageDiv=document.createElement('div');
        MessageDiv.textContent=Message;
        chatbox.appendChild(MessageDiv);
        chatbox.scrollTop=chatbox.scrollHeight;
    }


    }
