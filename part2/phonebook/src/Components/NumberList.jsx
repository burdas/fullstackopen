import { NumbersListItems } from "./NumbersListItem"

export const NumbersList = ({ persons }) => {
    return (
        <>
            <h2>Numbers</h2>
            <ul>
                {persons.map(person => (
                    <NumbersListItems key={person.name} name={person.name} />
                ))}
            </ul>
        </>
    )
}