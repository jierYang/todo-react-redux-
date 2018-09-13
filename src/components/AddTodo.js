import React from "react";
import {Button, Modal} from "react-bootstrap";

export default class AddTodo extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
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

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Add</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
