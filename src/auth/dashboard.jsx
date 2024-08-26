import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar.jsx";
import Chat from "./chat.jsx";

const Dashboard = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [messages, setMessages] = useState([])
    const [user, setUser] = useState([])

    useEffect(()=>{

        const fetchUsers = async () => {
            try{
                const token = localStorage.getItem("token");

                if(!token){
                    navigate('/login');
                    return ;
                }

                const response = await axios.get("http://192.168.1.141:8000/api/onlines",{
                    headers:{
                        Authorization: `Bearer ${token}`,
                    },
                });

                setUsers(response.data);
                console.log(users)
            }catch(error){
                if (error.response && error.response.status === 401) {
                    Swal.fire({
                        icon: "error",
                        title: "Authentication Failed",
                        text: "Please log in again.",
                    }).then(() => {
                        navigate("/login");
                    });
                } else {
                    console.error("Error fetching users :", error);
                }
            }
        };
        fetchUsers();

    },[navigate])
    useEffect(()=>{

        const fetchUser = async () => {
            try{
                const token = localStorage.getItem("token");

                if(!token){
                    navigate('/login');
                    return ;
                }

                const response = await axios.get("http://192.168.1.141:8000/api/user",{
                    headers:{
                        Authorization: `Bearer ${token}`,
                    },
                });

                setUser(response.data);

            }catch(error){
                if (error.response && error.response.status === 401) {
                    Swal.fire({
                        icon: "error",
                        title: "Authentication Failed",
                        text: "Please log in again.",
                    }).then(() => {
                        navigate("/login");
                    });
                } else {
                    console.error("Error fetching user :", error);
                }
            }
        };
        fetchUser();

    },[navigate])




    useEffect(() => {
        const fetchMessage = async ()=>{
            try {
                const token = localStorage.getItem("token");

                if(!token){
                    navigate('/login');
                    return ;
                }
                const response = await axios.get('http://192.168.1.141:8000/api/chats',{
                    headers:{
                        Authorization: `Bearer ${token}`,
                    },
                    params: {
                        last_update : "2024-8-21 14:35:40"
                    }

                });
                setMessages(response.data.chats);

            }catch (error){
                console.error('error fetching message' , error);
            }
        }
        fetchMessage();
    }, [navigate]);
    const sendMessage = async (message)=>{
        try {
            const newMessage = {text:message,userId:3 , isMine:true};
            const response = await axios.post('http://192.168.1.141:8000/api/chats',newMessage);
            setMessages(messages.concat(response.data));
        }catch (error){
            console.error('error sending message' , error);
        }
    }
    console.log(messages);
    return (
        <div className="AppContainer">
            <Sidebar users={users}/>
            <Chat users={users} messages={messages} sendMessage={sendMessage} user={user}/>

        </div>
    )
}


export default Dashboard;