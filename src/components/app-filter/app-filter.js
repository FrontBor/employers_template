import styled from "styled-components";

import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', lable: 'Все сотрудники'},
        {name: 'rise', lable: 'На повышение'},
        {name: 'moreThen1000', lable: 'З/П больше 1000$'}      
    ]

    const Wrapper = styled.button`  
        color: #ffffff;
        background-color: #8FBC8F; 
    `;

    

    const buttons = buttonsData.map(({name, lable}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return(
            <Wrapper type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => props.onFilterSelect(name)}>
                    {lable}
            </Wrapper>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;