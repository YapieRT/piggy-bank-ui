import React, { Fragment } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

/* function WhoAmI({ name, surname, link }) {

} */

class WhoAmI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 27,
            position: ''
        }
        /* this.nextAge = this.nextAge.bind(this); //Для не стрілкових функцій 
        <button onClick={() => this.nextAge}>+++</button> //Те ж саме */
    }

    nextAge = () => {
        this.setState(state => ({
            age: state.age + 1
        }))
    }

    previousAge = () => {
        this.setState(state => ({
            age: state.age - 1
        }))
    }

    commitInputChanges = (e, color) => {
        console.log(color);
        this.setState({
            position: e.target.value
        })
    }

    render() {
        const { name, surname, link } = this.props;
        const { position, age } = this.state;
        return (
            <div> {/* можна юзати Fragment або <> */}
                <button onClick={this.nextAge}>+++</button>
                <button onClick={this.previousAge}>---</button>

                <h1>My name is {name},
                    surname - {surname},
                    age - {this.state.age},
                    position ={this.state.position} </h1>

                <a href={link}>My profile</a>
                <form>
                    <span>Введіть посаду</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
                </form>
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Client 1', salary: 800, increase: false, rise: true, id: 1 },
                { name: 'Client 2', salary: 3000, increase: true, rise: false, id: 2 },
                { name: 'Client 3', salary: 5000, increase: false, rise: false, id: 3 },
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);

            /*const before = data.slice(0, index);
              const after = data.slice(index + 1);
              const newArr = [...before, ...after]; */

            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newData = [...data, newItem];
            if (newItem.name.length > 3 && newItem.salary.length > 0) {
                return {
                    data: newData
                }
            }
        })
    }

    // onToggleIncrease = (id) => {
    //     /*      this.setState(({ data }) => {
    //              const index = data.findIndex(elem => elem.id === id);
    //              const old = data[index];
    //              const newItem = { ...old, increase: !old.increase };
    //              const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    //              return {
    //                  data: newArr
    //              }
    //          }) */
    //     this.setState(({ data }) => ({
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return {
    //                     ...item, increase: !item.increase
    //                 }
    //             }
    //             return item;
    //         })
    //     }))

    // }

    // onToggleRise = (id) => {
    //     this.setState(({ data }) => ({
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return {
    //                     ...item, rise: !item.rise
    //                 }
    //             }
    //             return item;
    //         })
    //     }))
    // }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {
                        ...item, [prop]: !item[prop]
                    }
                }
                return item;
            })
        }))
    }

    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        return (
            <div className="app">
                <AppInfo
                    employees={employees}
                    increased={increased} />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />
                <EmployeesAddForm
                    onAdd={this.addItem} />
                <WhoAmI name='John' surname="Smith" link="https:/google.com" />
                <WhoAmI name='Alex' surname="Shepard" link="https:/facebook.com" />
            </div>
        );
    }
}

export default App;