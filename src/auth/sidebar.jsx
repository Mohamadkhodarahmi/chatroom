import React from "react";
import '../index.css';
const Sidebar = ({users}) =>{
    return (
    <div className="sidebar">
        <h2>online users</h2>
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.name}
                </li>
            ))}

        </ul>
    </div>
)
}
export default Sidebar;