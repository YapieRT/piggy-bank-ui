import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button
                className="btn btn-light"
                type="button">
                Всі клієнти
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                Клієнти на повышение
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                Зарплата більше 1000$
            </button>
        </div>
    )
}

export default AppFilter;