import React from 'react';
import Select from 'react-select';


const options = [
    {id:1,name: "meeting_review", label: "Meeting Review"},
    {id:2,name: "learning_devops", label: "Learning DevOps"},
    {id:3,name: "watching_book", label: "Watching Book"}
];

export default class AddTodoTags extends React.Component {
    state = {
        selectedOption:  {name: "meeting_review", label: "Meeting Review"}
    }

    handleChange = (selectedOption) => {
        this.setState({selectedOption});
        this.props.handleTags({id:selectedOption.id,name:selectedOption.label});
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