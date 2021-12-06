import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {


    const elements = data.map(item => {
        const {id, ...itemProps} = item; // алгоритм служит для оптимизации скорости работы приложения
        return (
            <EmployeesListItem 
            key={id}
            {...itemProps} // {...item},  name={item.name} salary={item.salary} increase={item.increase} получится тоже самое как с props Spreфd - оператор
            onDelete={() => onDelete(id)}
            onToggleIncrease={() => onToggleIncrease(id)}
            onToggleRise={() => onToggleRise(id)}/> 
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;