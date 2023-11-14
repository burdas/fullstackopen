import React, { useState } from "react";
import { NumbersList } from "./Components/NumberList";
import { NumberForm } from "./Components/NumberForm";
import { Filter } from "./Components/Filter"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("")

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

  const onChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Filter filterName={filter} handleFilterChange={onChangeFilter} />
      <NumberForm
        handleSubmit={addName}
        handleNameChange={onChangeName}
        handleNumberChange={onChangeNumber}
        newName={newName}
        newNumber={newNumber}
      />
      <NumbersList persons={persons} filter={filter} />
    </>
  );
};

export default App;
