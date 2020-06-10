import React, {useState} from 'react';

const Form = (props) => {
    const [member, setMember] = useState({name: "", email: "", role: ""})

    const handleChanges = e => {
        setMember({...member, [e.target.name]: e.target.value});
    };
    console.log(member, 'member useState ')

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({name: "", email: "", role: ""})
    }

    return(
    <form onSubmit={submitForm} style={{background: 'skyblue', width: "500px"}}>
        <label htmlFor="name">Name</label>
        <input  id="name"  placeholder="Name" name="name"  value={member.name} onChange={handleChanges} />

        <label htmlFor="email">Email</label>
        <input id="email" placeholder="email" name="email" value={member.email} onChange={handleChanges} />

        <label htmlFor="role">role</label>
        <input id="role" placeholder="role" name="role" value={member.role} onChange={handleChanges} />

        <button type="submit">Submit</button>
    </form>
    )
}

export default Form;