export const Filter = ({filter, onChangeFilter}) => {
    return (
        <div>
            Find countries: <input value={filter} onChange={onChangeFilter} />
        </div>
    );
}