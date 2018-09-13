import React from "react";
import {Button, Modal} from "react-bootstrap";
import AddTodoStatus from "./AddTodoStatus";
import AddTodoCalendar from "./AddTodoCalendar";
import {applyMiddleware as dispatch} from "redux";

export default class AddTodo extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            date: new Date(),
            status: 'todo'
        };
    }

    handleClose() {
        debugger
        this.setState({show: false});

        dispatch({type: 'LOGIN', todo: {action:document.getElementById("actionInput").value,date:this.state.date,status:this.state.status}});
        console.log({action:document.getElementById("actionInput").value,date:this.state.date,status:this.state.status});
    }

    handleShow() {
        this.setState({show: true});
    }

    handleDate(date) {
        this.setState({date: {date}});
        console.log(this.state.date);
    }

    handleStatus(selectedOption) {
        this.setState({status: {selectedOption}});
        // console.log(this.state.status);
    }

    render() {
        return (
            <div>
                <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                    +
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add you want to do</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <li>Action: <input id="actionInput"/></li>
                        <li>Due Date:<AddTodoCalendar handleDate={this.handleDate.bind(this)}/></li>
                        <li>Status:<AddTodoStatus handleStatus={this.handleStatus.bind(this)}/></li>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Add</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     onAddTodo: () => dispatch({type: 'LOGIN', todo: {action:document.getElementById("actionInput").value,date:this.state.date,status:this.state.status}})
// });
//
// const mapStateToProps = (state) => ({
//    null : state.todoList
// });
//
// const addTodoContainer = connect(mapStateToProps, mapDispatchToProps)(AddTodo);
//
// export {addTodoContainer} ;