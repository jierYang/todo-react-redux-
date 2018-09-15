import React from "react";


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
)
const TodosTableBody = (props) => {
    return (
            <tbody>
            <tr>
                <td>{props.item.action}</td>
                <td>{props.item.tags}</td>
                <td>{props.item.date.toLocaleDateString()}</td>
                <td>{props.item.status}</td>
                <td><button>details</button> <button>delete</button></td>
            </tr>
            </tbody>
    )
}

export {TodosTableHead, TodosTableBody}