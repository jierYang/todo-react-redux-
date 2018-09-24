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


function fmtDate(obj) {
    var date = new Date(obj);
    var y = 1900 + date.getYear();
    var m = "0" + (date.getMonth() + 1);
    var d = "0" + date.getDate();
    return y + "-" + m.substring(m.length - 2, m.length) + "-" + d.substring(d.length - 2, d.length);
}

const TodosTableBody = (props) => {
    return (
        <tbody>
        <tr>
            <td>{props.item.action}</td>
            <td>{props.item.tags === null ? "" : props.item.tags.name}</td>
            <td>{fmtDate(props.item.date)}</td>
            <td>{props.item.status === null ? "" : props.item.status.name}</td>
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
                                                props.handleDel(id,props.token);
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
    todoList: state.todoList,
    token:state.authenticatedMsg.token
});

const mapDispatchToProps = (dispatch) => ({
    handleDel: (id,token) => (
            fetch(`/todos/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': token
                }
            })
                .then((response) => {
                    if (response.status !== 200) {
                        alert("delete failed!");
                    }
                    else if(response.status===200){
                        dispatch({
                            type: 'DEL_TODO',
                            id: id
                        })
                    }
                    return response.text()
                })
        )
});

const TabTodoContainer = connect(mapStateToProps, mapDispatchToProps)(TabTodo);


export {TabTodoContainer};
