import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap'

const mapStateToProps = (state) => {
  const props = {
    text: state.text,
  };
  return props;
};

const actionCreators = {
  updateNewTaskText: actions.updateNewTaskText,
  addTask: actions.addTask,
};

const AddTask = ({
  addTask,
  text,
  updateNewTaskText,
}) => {  
  
  const handleAddTask = (e) => {
    e.preventDefault();
    const task = { text, id: _.uniqueId() };
    addTask({ task });
  };

  const handleUpdateNewTaskText = (e) => {
    updateNewTaskText({ text: e.target.value });
  };

  const divStyle = {
    marginLeft: '8px',
    border: '0',
  };

  return (
    <>
<Form className="d-flex justify-content-center mt-3" onSubmit={handleAddTask}>
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Control type="text" onChange={handleUpdateNewTaskText} value={text} placeholder="Enter task" />
</Form.Group>
<Button className="mb-3 text-white" variant="info" style={divStyle} type="submit">
  Add
</Button>
</Form>
</>
  );
};

export default connect(mapStateToProps, actionCreators)(AddTask);