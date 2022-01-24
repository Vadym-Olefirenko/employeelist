import React from 'react';
import './search-panel.css';

class SearchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    setSearchValue = (e) => {
        const enteredValue = e.target.value;
        this.setState(state => state.value = enteredValue);
        this.props.onSearch(enteredValue)
    }
    render () {
        return (
        <input type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.value}
                onChange={this.setSearchValue}
        />
    )
    }
}

export default SearchPanel;