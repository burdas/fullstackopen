export const NumberForm = ({ handleSubmit, newName, handleNameChange, newNumber, handleNumberChange }) => {
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a new</h2>
            <div>
                Name: <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
                Number: <input value={newNumber} onChange={handleNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}