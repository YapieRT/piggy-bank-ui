import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        { name: 'all', label: 'Всі клієнти' },
        { name: 'rise', label: 'Клієнти на повышение' },
        { name: 'moreThen1000', label: 'Зарплата більше 1000$' },
    ];

    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';

        return (
            < button
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {label}
            </button >
        )
    })
    return (
        <div className="btn-group">
            {buttons}
            {/* <button
                className="btn btn-outline-light"
                type="button">
                Клієнти на повышение
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                Зарплата більше 1000$
            </button> */}
        </div>
    )
}

export default AppFilter;