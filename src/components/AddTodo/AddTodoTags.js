import React from 'react';
import Select from 'react-select';


const options = [
    {name: "null", label: ""},
    {name: "meeting_review", label: "Meeting Review"},
    {name: "learning_devops", label: "Learning DevOps"},
    {name: "watching_book", label: "Watching Book"}
];

export default class AddTodoTags extends React.Component {
    state = {
        selectedOption: {value: 'null', label: ''},
    }

    handleChange = (selectedOption) => {
        this.setState({selectedOption});
        this.props.handleTags(selectedOption.label);
    }

    render() {
        const {selectedOption} = this.state;

        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
            />
        );
    }
}