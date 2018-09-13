import React from "react";
import {Button, Modal} from "react-bootstrap";
import AddTodoStatus from "./AddTodoStatus";
import AddTodoCalendar from "./AddTodoCalendar";

export default class AddTodo extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            date: new Date()
        };
    }

    handleClose() {
        this.setState({show: false});

    }

    handleShow() {
        this.setState({show: true});
    }

    handleDate(date){
        debugger
        this.setState({date:{date}});
        console.log(this.state.date);
    }

    render() {
        return (
            <div>
                <p>Click to get the full Modal experience!</p>

                <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                    +
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add you want to do</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <li>Action: <input /></li>
                        <li>Due Date:<AddTodoCalendar handleDate={this.handleDate.bind(this)}/></li>
                        <li>Status:<AddTodoStatus/></li>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Add</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
