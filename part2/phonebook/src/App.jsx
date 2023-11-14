import React, { useState } from "react";
import { NumbersList } from "./Components/NumberList";
import { NumberForm } from "./Components/NumberForm";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: "040-1234567" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addName = (event) => {
    event.preventDefault();
    if (persons.find(p => p.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }));
      setNewName("");
      setNewNumber("")
    }
  };

  const onChangeName = (event) => {
    setNewName(event.target.value);
  };

  const onChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <NumberForm
        handleSubmit={addName}
        handleNameChange={onChangeName}
        handleNumberChange={onChangeNumber}
        newName={newName}
        newNumber={newNumber}
      />
      <NumbersList persons={persons} />
    </>
  );
};

export default App;
