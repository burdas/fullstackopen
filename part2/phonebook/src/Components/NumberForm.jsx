export const NumberForm = ({ handleSubmit, newName, handleNameChange }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                name: <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}