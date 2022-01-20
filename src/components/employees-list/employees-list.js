import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = (props) => {

   let listElements = props.data.map(elem => {
    return <EmployeesListItem 
                onToggleProp={(e) => props.onToggleProp(elem.id, e.currentTarget.getAttribute('data-toggle'))}
                onDelete={() => props.onDelete(elem.id)} 
                key={elem.id} 
                name={elem.name} 
                salary={elem.salary} 
                increase={elem.increase}
                like={elem.like}
            />
   });

    return (
        <ul className="app-list list-group">{listElements}</ul>
    )
}

export default EmployeesList;