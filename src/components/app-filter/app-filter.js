import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', text: 'Все сотрудники'},
        {name: 'like', text: 'На повышение'},
        {name: 'more1k', text: 'З/П больше 1000$'},
    ];

    const buttons = buttonsData.map(item => {
        const active = item.name === props.filter;
        const clazz = active ? 'btn btn-light' : 'btn btn-outline-light';

        return (
            <button type="button"
                    key={item.name}
                    className={clazz}
                    onClick={() => props.onFilter(item.name)}
            >
                    {item.text}
            </button> 
        )
    });

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;