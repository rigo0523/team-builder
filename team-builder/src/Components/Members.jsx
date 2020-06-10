import React from "react";

const Members = props => {
return (
    <div style={{background: "green", width: "500px", margin: "0 auto"}}>
    {props.members.map(member => (
        <div key={member.id} style={{background: 'skyblue'}}>
            <h2>Name : {member.name}</h2>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
        </div>
    ))}
    </div>
);
};

export default Members;