import React from 'react';

export default function Form(props) {
    const { onNameChange, onEmailChange, onRoleChange, onFormSubmit } = props;
    const { name, email, role } = props.teamForm;
    const isDisabled = () => {
      if (!name || !email || !role) {
        return true
      }
      return false
    };
  
    return (
      <form>
        <label htmlFor='nameInput'>Name</label>
        <input
          value={name}
          onChange={onNameChange}
          id='nameInput'
          type='text'
        />
  
        <label htmlFor='emailInput'>Email</label>
        <input
          value={email}
          onChange={onEmailChange}
          id='emailInput'
          type='text'
        />

        <label htmlFor='roleInput'>Role</label>
        <input
          value={role}
          onChange={onRoleChange}
          id='roleInput'
          type='text'
        />
  
        <button
          onClick={onFormSubmit}
          disabled={isDisabled()}
        >
          submit
        </button>
      </form>
    );
  }