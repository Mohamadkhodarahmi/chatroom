import {useState} from "react";
import '../index.css';
const ChatWindow = ({messages,users,sendMessage,user})=>{
    const [newMessage, setNewMessage] = useState('');

    const handelSend = ()=> {
        if (newMessage.trim()){
            sendMessage(newMessage);
            setNewMessage('');
        }
    }
    // const getUserNameById = (userId) =>{
    //     const user = users.find(user => user.id === Number(userId));
    //     return user ? user.name :'unknown';
    // }
    console.log(user.name)
    return(
        <div className='ChatContainer'>
            <div className='MessagesContainer'>
                {messages.map((msg,index)=>(
                    <div key={index} className={`Message ${msg.userId === user.id ? 'isMine' : 'isOther'}`}>
                        <strong>{msg.user.name}:</strong>{msg.text}
                    </div>
                ))}

            </div>
            <div>
                <input type="text" className='TextInput' value='{newMessage}'
                       onChange={e => setNewMessage(e.target.value)}
                placeholder="type message .."/>
                <button className='SendButton' onClick={handelSend}>send</button>
            </div>
        </div>
    )
};

export default ChatWindow;