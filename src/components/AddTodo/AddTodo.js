import React from "react";
import {Button, Modal} from "react-bootstrap";
import AddTodoStatus from "./AddTodoStatus";
import AddTodoCalendar from "./AddTodoCalendar";
import connect from "react-redux/es/connect/connect";
import AddTodoTags from "./AddTodoTags";
import '../Tab/Tab.css'


class AddTodo extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleCancel = this.handleCancel.bind(this);

        this.state = {
            show: false,
            date: new Date(),
            status: 'To do',
            tags:''
        };
    }

    handleAdd() {
        this.setState({show: false});

        this.props.handleAdd({action: document.getElementById("actionInput").value, date: this.state.date, status: this.state.status,tags: this.state.tags});
    }

    handleCancel() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }

    handleDate(date) {
        this.setState({date:date});
        console.log(this.state.date);
    }

    handleStatus(selectedOption) {
        this.setState({status: selectedOption});
        console.log({selectedOption});
    }

    handleTags(selectedOption) {
        this.setState({tags: selectedOption});
        console.log({selectedOption});
    }

    render() {
        return (
            <div>
                <Modal show={this.state.show} onHide={this.handleCancel}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add you want to do</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <li>Action: <input id="actionInput"/></li>
                        <li>Due Date: <AddTodoCalendar handleDate={this.handleDate.bind(this)}/></li>
                        <li>Status: <AddTodoStatus handleStatus={this.handleStatus.bind(this)}/></li>
                        <li>Tags: <AddTodoTags handleTags={this.handleTags.bind(this)}/> </li>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleCancel}>CANCEL</Button>
                        <Button onClick={this.handleAdd}>Add</Button>
                    </Modal.Footer>
                </Modal>

                <button className = "tab_todo_add_btn" onClick={this.handleShow}>
                    +
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleAdd: (todo) => dispatch({
        type: 'ADD_TODO',
        todo: todo
    })
})


const AddTodoContainer = connect(null, mapDispatchToProps)(AddTodo);


export default AddTodoContainer;

