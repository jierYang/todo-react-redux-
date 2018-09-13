import React, {Component} from 'react';
import Calendar from 'react-calendar';

export default class AddTodoCalendar extends Component {
    // state = {
    //     date: new Date(),
    // }

    onChange = date => {
        this.props.handleDate({date})
    }

    // onChange = (date) => {
    //     // this.setState({date: {date}});
    //     this.props.handleDate( {date});
    // }

    render() {
        return (
            <div>

                <Calendar
                    onChange={this.onChange}
                    // value={this.state.date}
                />

            </div>
        );
    }
}