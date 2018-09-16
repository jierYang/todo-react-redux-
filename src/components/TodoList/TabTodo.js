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
            <td><button onClick={props.clickDetailHandler}>details</button> <button onClick={props.clickDelHandler}>delete</button></td>
        </tr>
        </tbody>
    )
};

const TabTodo = (props) => (
    <div className="tab_todo_table_add">
        <Table striped bordered condensed hover id="tbID">
            <TodosTableHead/>
            {
                (props.todoList.length>0)&&
                props.todoList.map(function (item) {
                    debugger
                    return (
                        <TodosTableBody item={item}

                                        clickDelHandler={() =>{
                                            debugger
                                            document.getElementById('tbID').deleteRow(item.id);

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

        <AddTodoContainer />
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



// import * as React from "react";
// import AddTodoContainer from "../AddTodo/AddTodo";
// import {connect} from "react-redux";
// import {Button, Table} from "react-bootstrap";
// import Modal from "react-bootstrap/es/Modal";
//
// const TodosTableHead = () => (
//     <thead>
//     <tr>
//         <th>Action</th>
//         <th>Tags</th>
//         <th>Due Date</th>
//         <th>Status</th>
//         <th>Actions</th>
//     </tr>
//     </thead>
// );
//
// class TabTodo extends React.Component {
//     constructor(props, context) {
//         super(props, context);
//
//         this.handleDel = this.handleDel.bind(this);
//     }
//
//     handleDel(id) {
//         debugger
//         document.getElementById('tbID').deleteRow(id);
//         this.props.handleDel(id);
//     }
//
//     render() {
//         return (
//             <div className="tab_todo_table_add">
//                 <Table striped bordered condensed hover id="tbID">
//                     <TodosTableHead/>
//                     <tbody>
//                     {
//                         this.props.todoList.map(function (item) {
//                             debugger
//                             return (
//
//                                 <tr>
//                                     <td>{item.action}</td>
//                                     <td>{item.tags}</td>
//                                     <td>{item.date.toLocaleDateString()}</td>
//                                     <td>{item.status}</td>
//                                     <td>
//                                         {/*<button onClick={props.clickDetailHandler}>details</button>*/}
//                                         <button onclick={this.handleDel(item.id)}>Add</button>
//                                     </td>
//                                 </tr>
//                             )
//                         })
//                     }
//                     </tbody>
//                 </Table>
//
//                 <AddTodoContainer/>
//             </div>
//         );
//     }
// }
//
// const mapDispatchToProps = (dispatch) => ({
//     handleDel: (id) => dispatch({
//         type: 'DEL_TODO',
//         id: id
//     })
// })
//
// const mapStateToProps = (state) => ({
//     todoList: state.todoList
// });
//
// const TabTodoContainer = connect(mapStateToProps, mapDispatchToProps)(TabTodo);
//
//
// export default TabTodoContainer;
