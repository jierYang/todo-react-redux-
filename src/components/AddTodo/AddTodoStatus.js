import React from 'react';
import Select from 'react-select';


const options = [
    { id:1,value: 'inProgress', label: 'In progress' },
    { id:2,value: 'blocked', label: 'Blocked' },
    { id:3,value: 'todo', label: 'To do' }
];

export default class AddTodoStatus extends React.Component {
    state = {
        selectedOption: { id:1,value: 'todo', label: 'To do' },
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        this.props.handleStatus({id:selectedOption.id,name:selectedOption.label});
    }

    render() {
        const { selectedOption } = this.state;

        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
            />
        );
    }
}