
import './app-info.css';

const AppInfo = ({ employees, increased }) => {
    return (
        <div className="app-info">
            <h1>Список клієнтів PiggyBank</h1>
            <h2>Кількість клієнтів: {employees} </h2>
            <h2>Премію отримають: {increased} </h2>
        </div>
    );
}

export default AppInfo;