import React from 'react';

export default function Form(props) {
    const { onInputChange, onFormSubmit } = props;
    const { name, email, role } = props.teamForm;
    const isDisabled = () => {
      if (!name || !email || !role) {
        return true;
      }
      return false;
    };
  
    return (
      <form>
        <label htmlFor='nameInput'>Name</label>
        <input
          value={name}
          onChange={onInputChange}
          id='nameInput'
          type='text'
        />
  
        <label htmlFor='emailInput'>Email</label>
        <input
          value={email}
          onChange={onInputChange}
          id='emailInput'
          type='text'
        />

        <label htmlFor='roleInput'>Role</label>
        <input
          value={role}
          onChange={onInputChange}
          id='roleInput'
          type='text'
        />
  
        <button
          disabled = {isDisabled()}
          onClick={onFormSubmit}
        >
          submit
        </button>
      </form>
    );
  }