import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'inProgress', label: 'In progress' },
    { value: 'blocked', label: 'Blocked' },
    { value: 'todo', label: 'To do' }
];

export default class AddTodoStatus extends React.Component {
    state = {
        selectedOption: { value: 'todo', label: 'To do' },
    }
    // handleChange(selectedOption) {
    //     debugger
    //     this.setState({selectedOption:{ selectedOption }});
    //     this.props.handleStatus({ selectedOption });
    // }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        this.props.handleStatus({ selectedOption });
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