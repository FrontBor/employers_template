import { Component } from 'react'; 

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      data: [
        {name: 'Ivan', salary: '500', increase: false, id: 1},
        {name: 'Boris', salary: '15000', increase: true, id: 2},
        {name: 'Gena', salary: '1400', increase: false, id: 3},    // объекты на странице
        {name: 'Pasha', salary: '1500', increase: false, id: 4},
        {name: 'Grisha', salary: '1300', increase: false, id: 5}
      ]
    }
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
        
        
        // 1) первый способ удаления объектов
        // const index = data.findIndex(elem => elem.id === id); // поиск объекта 
        // const before = data.slice(0, index); // сохраняем старй объект и не вредим старому, не нарушая принцип иммутабельности
        // const after = data.slice(index + 1);

        // const newArr = [...before, ...after]; //ES6 создание нового массива

        return {
          data: data.filter(item => item.id !== id) // 2) второй способ удаления объектов
        }
    })
  }

    render() {
      return (
        <div className="app">
            <AppInfo />
  
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            
            <EmployeesList 
                data={this.state.data} 
                onDelete={this.deleteItem}/>
            <EmployeesAddForm/>
        </div>
      );
    }
  }

export default App;
