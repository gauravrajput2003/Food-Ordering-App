import { useState } from "react";

const User=({name})=>{
    const [count]=useState(0);
    const [count2]=useState(2);
    return (
        <div className="user-card">
            <h3>{name}</h3>
            <h3>count1:{count}</h3>
         
            <h2>Location :Jhumari Taliya</h2>
            <h2>contact :@gauravRajput</h2>
        </div>
    );
};
export default User;