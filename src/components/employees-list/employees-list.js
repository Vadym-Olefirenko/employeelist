import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = (props) => {

   let listElements = props.data.map(elem => <EmployeesListItem onDelete={() => props.onDelete(elem.id)} key={elem.id} name={elem.name} salary={elem.salary} increase={elem.increase}/>);

    return (
        <ul className="app-list list-group">{listElements}</ul>
    )
}

export default EmployeesList;