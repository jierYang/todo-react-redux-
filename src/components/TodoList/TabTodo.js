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
    return (
        <tbody>
        <tr>
            <td>{props.item.action}</td>
            <td>{props.item.tags}</td>
            <td>{props.item.date.toLocaleDateString()}</td>
            <td>{props.item.status}</td>
            <td><AddTodoContainer type={'Edit'} item={props.item}/>
                <button onClick={props.clickDelHandler}>delete</button>
            </td>
        </tr>
        </tbody>
    )
};

const TabTodo = (props) => (
    <div className="tab_todo_table_add">
        <Table striped bordered condensed hover id="tbID">
            <TodosTableHead/>
            {
                (props.todoList.length > 0) &&
                props.todoList.map(function (item) {
                    return (
                        <TodosTableBody item={item}

                                        clickDelHandler={() => {
                                            debugger
                                            function handleDel(id) {
                                                props.handleDel(id);
                                            }

                                            handleDel(item.id)
                                        }}


                                        clickDetailHandler={() => {
                                            debugger
                                        }}
                        />
                    )
                })
            }
        </Table>

        <AddTodoContainer type={'Add'}/>
    </div>
);


// 建立从 state对象到（UI 组件的）props对象的映射关系。
const mapStateToProps = (state) => ({
    todoList: state.todoList
});

const mapDispatchToProps = (dispatch) => ({
    handleDel: (id) => dispatch({
        type: 'DEL_TODO',
        id: id
    })
})

const TabTodoContainer = connect(mapStateToProps, mapDispatchToProps)(TabTodo);


export default TabTodoContainer;
