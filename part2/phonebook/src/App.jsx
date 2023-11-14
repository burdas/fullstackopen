import React, { useState, useEffect } from "react";
import { NumbersList } from "./Components/NumberList";
import { NumberForm } from "./Components/NumberForm";
import { Filter } from "./Components/Filter";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const addName = (event) => {
    event.preventDefault();
    if (persons.find((p) => p.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(
        persons.concat({id: persons.length+1 , name: newName, number: newNumber })
      );
      setNewName("");
      setNewNumber("");
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
