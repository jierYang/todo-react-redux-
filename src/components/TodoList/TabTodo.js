import React from "react";
import AddTodoContainer from "../AddTodo/AddTodo";
import {connect} from "react-redux";
import {Table} from "react-bootstrap";
import '../Tab/Tab.css'

const TodosTableHead = () => (
    <thead>
    <tr>
        <th>Action</th>
        <th>Tags</th>
        <th>Due Date</th>
        <th>Status</th>
        <th>Actions</th>
    </tr>
    </thead>
);

const TodosTableBody = (props) => {
    debugger
    return (
        <tbody>
        <tr >
            <td>{props.item.action}</td>
            <td>{props.item.tags}</td>
            <td>{props.item.date.toLocaleDateString()}</td>
            <td>{props.item.status}</td>
            <td><button>details</button> <button>delete</button></td>
        </tr>
        </tbody>
    )
};

const TabTodo = (props) => (
    <div className="tab_todo_table_add">
        <Table striped bordered condensed hover>
            <TodosTableHead/>

            {
                props.todoList.map(function (item) {
                    return (
                        <TodosTableBody item={item}/>
                    )
                })
            }
        </Table>

        <AddTodoContainer />
    </div>
);


// 建立从 state对象到（UI 组件的）props对象的映射关系。
const mapStateToProps = (state) => ({
    todoList: state.todoList
});


const TabTodoContainer = connect(mapStateToProps, null)(TabTodo);


export default TabTodoContainer;

