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

  const onNameChange = e => {
    // we have the new value for the name input inside e.target.value
    setTeamForm({
      name: e.target.value,
      email: teamForm.email,
      role: teamForm.role,
    });
  };

  const onEmailChange = e => {
    setTeamForm({
      name: teamForm.name,
      email: e.target.value,
      role: teamForm.role,
    });
  };

  const onRoleChange = e => {
    setTeamForm({
      name: teamForm.name,
      email: teamForm.email,
      role: e.target.value,
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
      onNameChange={onNameChange}
      onEmailChange={onEmailChange}
      onRoleChange={onRoleChange}
      onFormSubmit={onFormSubmit}
      teamForm={teamForm}
      />

      {
        teamMembers.map(member => (
          <h5 key={member.id}>
            {member.name} is a {member.role}.
          </h5>
        ))
      }
    </div>
  );
}

export default App;
