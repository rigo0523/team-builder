import React, {useState} from 'react';
import './App.css';
import Form from "./Components/Form"
import Members from "./Components/Members"

function App() {
  const [teamMembers, setTeamMembers] = useState([{name: "", email: "", role: ""}])
  console.log(teamMembers, 'team members in app component')

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setTeamMembers([...teamMembers, newMember])
  }
  return (
    <div className="App">
      <Form addNewMember={addNewMember}/>
      <Members members={teamMembers}/>
    </div>
  );
}

export default App;
