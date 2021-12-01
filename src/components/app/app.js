import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

    const data = [
      {name: 'Ivan', salary: '500', increase: false, id: 1},
      {name: 'Boris', salary: '15000', increase: true, id: 2},
      {name: 'Gena', salary: '1400', increase: false, id: 3},
      {name: 'Pasha', salary: '1500', increase: false, id: 4},
      {name: 'Grisha', salary: '1300', increase: false, id: 5}
    ]

    return (
      <div className="app">
          <AppInfo />

          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList  data={data}/>
          <EmployeesAddForm/>
      </div>
    );
  }

export default App;
