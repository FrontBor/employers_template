import { Component } from 'react'; 
import styled from "styled-components";

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

const Info = styled.div`
    background-color: #20B2AA; 
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      data: [
        {name: 'Ivan', salary: '500', increase: false, rise: true, id: 1},
        {name: 'Boris', salary: '15000', increase: false, rise: false, id: 2}, // объекты на странице
        {name: 'Gena', salary: '1400', increase: false, rise: false, id: 3}    
        
      ],
      term: '',
      filter: 'all' 
    } 
    this.maxId = 4;
  }
  
  //удаление элементов

  deleteItem = (id) => {
    this.setState(({data}) => {
        
        
        // 1) первый способ удаления объектов
        // const index = data.findIndex(elem => elem.id === id); // поиск объекта 
        // const before = data.slice(0, index); // сохраняем старй объект и не вредим старому, не нарушая принцип иммутабельности
        // const after = data.slice(index + 1);
        // const newArr = [...before, ...after]; //ES6 создание нового массива

        
        // 2) второй способ удаления объектов
        return {
          data: data.filter(item => item.id !== id) 
        }
    })
  }
    // создание новых объектов

    addItem = (name, salary) => {
      const newItem = {
          name,
          salary,
          increase: false,
          rise: false,
          id: this.maxId++
      }
      this.setState(({data}) => {
          const newArr = [...data, newItem];
          return {
            data: newArr
          }
      });
    }
    
    //печенька

    onToggleIncrease = (id) => {
        // this.setState(({data}) => {
        //   const index = data.findIndex(elem => elem.id === id)

        //   const old = data[index]
        //   const newItem = {...old, increase: !old.increase};
        //   const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        //     return {
        //       data: newArr
        //     }
        // })


        this.setState(({data}) => ({
            data: data.map(item => {     // map создает новый массив
              if (item.id === id) {
                return {...item, increase: !item.increase}
              }
                return item;
            })   
        }))
    }

    //имя сотрудника

    onTggleRise = (id) => {
      this.setState(({data}) => ({
        data: data.map(item => {     // map создает новый массив
          if (item.id === id) {
            return {...item, rise: !item.rise}
          }
            return item;
        })   
      }))
    }


    //поиск сотрудников

    searchEmo = (items, term) => {
        if (term.length === 0) {
          return items;
        }
        return items.filter(item => {
          return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
      this.setState({term});
    }

    //фильтры поиска

    filterPost = (items, filter) => {
      switch (filter) {
        case 'rise':
              return items.filter(item => item.rise);
        case 'moreThen1000':
              return items.filter(item => item.salary > 1000);
        default:
              return items;      
      }
    }

    onFilterSelect = (filter) => {
      this.setState({filter});      
    }

    
    
    render() {
      const {data, term, filter} = this.state
      const employees = this.state.data.length;
      const increased = this.state.data.filter(item => item.increase).length;
      const visidleData = this.filterPost(this.searchEmo(data, term), filter); //возвращает отфильстрованный массив по поиску
      return (
        <Info className="app">
            <AppInfo employees={employees} increased={increased}/>
  
            <div className="search-panel">
                <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                <AppFilter 
                  filter={filter} 
                  onFilterSelect={this.onFilterSelect}/>
            </div>
            
            <EmployeesList 
                data={visidleData} 
                onDelete={this.deleteItem}
                onToggleIncrease={this.onToggleIncrease}
                onToggleRise={this.onTggleRise}/>
            <EmployeesAddForm onAdd={this.addItem}/>
        </Info>
      );
    }
  }

export default App;
