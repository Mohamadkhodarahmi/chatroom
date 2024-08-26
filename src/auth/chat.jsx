import {useState} from "react";
import '../index.css';
const ChatWindow = ({messages,users,sendMessage})=>{
    const [newMessage, setNewMessage] = useState('');

    const handelSend = ()=> {
        if (newMessage.trim()){
            sendMessage(newMessage);
            setNewMessage('');
        }
    }
    const getUserNameById = (userId) =>{
        const user = users.find(user => user.id === Number(userId));
        return user ? user.name :'unknown';
    }
    return(
        <div className='ChatContainer'>
            <div className='MessagesContainer'>
                {messages.map((msg,index)=>(
                    <div key={index} className={`Message ${msg.isMine ? 'isMine' : ''}`}>
                        <strong>{getUserNameById(msg.userId)}:</strong>{msg.text}
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