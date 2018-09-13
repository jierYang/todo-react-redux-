import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'inProgress', label: 'In progress' },
    { value: 'blocked', label: 'Blocked' },
    { value: 'todo', label: 'To do' }
];

export default class AddTodoStatus extends React.Component {
    state = {
        selectedOption: null,
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
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