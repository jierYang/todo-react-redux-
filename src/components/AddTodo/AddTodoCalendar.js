import React, {Component} from 'react';
import Calendar from 'react-calendar';

export default class AddTodoCalendar extends Component {

    onChange = date => {
        this.props.handleDate(date)
    }

    render() {
        return (
            <div>

                <Calendar
                    onChange={this.onChange}
                />

            </div>
        );
    }
}