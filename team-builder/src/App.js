import React, {useState} from 'react';
import  Form from "./Form";
import uuid from 'uuid';
import './App.css';

function App() {

  const initialTeamForm = {
    name: '',
    email: '',
    role: '',
  }
  const [teamMembers, setTeamMembers] = useState([])
  const [teamForm, setTeamForm] = useState(initialTeamForm)

  const onInputChange = e => {
    setTeamForm({
      // ...teamForm, 
      [e.target.id]: e.target.value
    });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const newTeamMember = {
      id: uuid(),
      name: teamForm.name,
      email: teamForm.email,
      role: teamForm.role,
    };
    const newTeamList = teamMembers.concat(newTeamMember);
    setTeamMembers(newTeamList);
    setTeamForm(initialTeamForm);
  };


  return (
    <div className="App">
      <Form 
      onInputChange={onInputChange}
      onFormSubmit={onFormSubmit}
      teamForm={teamForm}
      />
    </div>
  );
}

export default App;
