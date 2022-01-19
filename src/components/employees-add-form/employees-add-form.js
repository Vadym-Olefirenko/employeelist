import React from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState(() => ({
            name: '',
            salary: ''
        }));
    }

    render () {
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}
                >
                    <input type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.onValueChange}
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" />
                    <input type="number"
                        name="salary"
                        value={this.state.salary}
                        onChange={this.onValueChange}
                        className="form-control new-post-label"
                        placeholder="З/П в $?" />
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;