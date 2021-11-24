import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {


    const elements = data.map(item => {
        const {id, ...itemProps} = item; // алгоритм служит для оптимизации скорости работы приложения
        return (
            <EmployeesListItem key={id} {...itemProps}/> // {...item}  name={item.name} salary={item.salary} increase={item.increase} получится тоже самое как с props Spreфd - оператор
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;