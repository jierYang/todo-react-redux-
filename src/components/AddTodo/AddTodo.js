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
        this.handleEdit = this.handleEdit.bind(this);

        this.state = {
            show: false,
            action: (props.type === "Add") ? '' : props.item.action,
            id: (props.type === "Add") ? null : props.item.id,
            date: new Date(),
            // status: 'To do',
            status: null,
            tags: '',
            btnContent: props.type,
            tipContent: (props.type === "Add") ? 'Add you want to do' : 'Details of Action',
        };
    }

    handleAdd() {
        this.setState({show: false});
        // let temp = {};
        // temp.action = document.getElementById("actionInput").value;
        // temp.date = this.state.date;
        // temp.status = this.state.status;
        // temp.tags = new Array({id: 1, name: this.state.tags});
        // this.props.handleAdd(todo,token);
        this.props.handleAdd({
            action: document.getElementById("actionInput").value,
            date: this.state.date,
            status: this.state.status,
            tags: new Array({id: 1, name: this.state.tags})
        },this.props.token);
    }

    handleEdit() {
        this.setState({show: false});

        this.props.handleEdit({
            action: this.state.btnContent === 'Add' ? document.getElementById("actionInput").value : this.state.action,
            date: this.state.date,
            status: this.state.status,
            tags: new Array({id: 1, name: this.state.tags}),
            id: this.state.id
        });
    }

    handleCancel() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }

    handleDate(date) {
        this.setState({date: date});
        console.log(this.state.date);
    }

    handleStatus(selectedOption) {
        debugger
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
                        <Modal.Title>{this.state.tipContent}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <li><p className='.todo_action_tips'>Action: </p>
                            {this.state.btnContent === 'Add' ? (
                                <input className='.todo_add_action' id="actionInput" type="text"/>) : (
                                <p className='.todo_edit_action' id="actionInput">{this.state.action}</p>)}
                        </li>

                        <li>Due Date: <AddTodoCalendar handleDate={this.handleDate.bind(this)}/></li>

                        <li>Status: <AddTodoStatus handleStatus={this.handleStatus.bind(this)}/></li>

                        <li>Tags: <AddTodoTags handleTags={this.handleTags.bind(this)}/></li>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleCancel}>CANCEL</Button>
                        <Button
                            onClick={this.state.btnContent === 'Add' ? this.handleAdd : this.handleEdit}>{this.state.btnContent}</Button>
                    </Modal.Footer>
                </Modal>

                <button className={this.state.btnContent === 'Add' ? 'tab_todo_add_btn' : 'tab_todo_detail_btn'}
                        onClick={this.handleShow}>
                    {this.state.btnContent}
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleAdd: (todo,token) => (
            fetch('/todos', {
                method: 'post',
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(todo),
            })
                .then(function (response) {
                    if (response.status !== 200) {
                        debugger
                        alert("add failed!");
                    }
                    return response.json();
                })
                .then(function (myJson) {
                    debugger
                    dispatch({
                        type: 'ADD_TODO',
                        todo: myJson
                    })
                })
    ),
    handleEdit: (todo) => dispatch({
        type: 'EDIT_TODO',
        todo: todo
    }),
})

const mapStateToProps = (state) => ({
    token: state.authenticatedMsg.token
});


const AddTodoContainer = connect(mapStateToProps, mapDispatchToProps)(AddTodo);


export default AddTodoContainer;

