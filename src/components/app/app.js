import React from 'react';


import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [
        {name: 'John C.', salary: 800, increase: false, like: false, id: 1},
        {name: 'Alex M.', salary: 3000, increase: false, like: false, id: 2},
        {name: 'Carl W.', salary: 5000, increase: false, like: false, id: 3}
      ]
    }
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(state => ({
      data: state.data.filter(elem => elem.id !== id)
    }));
  }

  addItem = (name, salary) => {
    const newItem = {name, salary, increase: false, id: this.maxId++};
    this.setState(state => ({
      data: [...state.data, newItem]
    }));
  }

  onToggleProp = (id, prop) => {
    this.setState(state =>({
      data: state.data.map(item => {
        if(item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item;
      })
    }));
  }


  render () {
    let employee = this.state.data.length;
    let emloyeeonincrese = this.state.data.filter(item => item.increase === true).length;
    return (
      <div className="app">
          <AppInfo employee={employee} emloyeeonincrese={emloyeeonincrese}/>
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList 
            data={this.state.data}
            onDelete={this.deleteItem}
            onToggleProp={this.onToggleProp}
          />
          <EmployeesAddForm onAdd ={this.addItem}/>
      </div>
    );
  }
}

export default App;
