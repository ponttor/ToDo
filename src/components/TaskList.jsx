import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import { ListGroup, Container } from 'react-bootstrap'
import { filteredTasksSelector } from '../selectors/index.js';
import success from '../images/finger.jpeg';
import del from '../images/redtest.png';

const mapStateToProps = (state) => {
  const tasks = filteredTasksSelector(state);
  return { tasks };
}

const actionCreators = {
  removeTask: actions.removeTask,
  toggleTaskState: actions.toggleTaskState,
};

const TaskList = ({ tasks, removeTask, toggleTaskState }) => {

  const handleRemoveTask = (id) => () => {
    removeTask({ id });
  };

  const handleToggleTaskState = (id) => (e) => {
    toggleTaskState({ id });

  };

  const renderPicActive = () => {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center">
      </div>
    )
  }

  const renderPicSuccess = () => {
    return (
      <div className="me-2 d-flex flex-column justify-content-center align-items-center">
    <img style={{ width: "2rem"}} src={success}></img> 
  </div>
    )
  }

  const renderTask = ({ text, id, state }) => {

    const taskStyle = state === 'active' ?
      {
        textDecoration: 'none',
        border: '0',
      } :
      {
        color: '#ced4da',
        textDecoration: 'none',
        border: '0',
      }


    if (text.length === 0) {
      return null;
    }
    return (
      <Container className="mb-2 d-flex justify-content-center">
        <ListGroup.Item key={id} style={taskStyle}>
          <span className="mr-auto">
            <a href="#" className="text-reset" onClick={handleToggleTaskState(id)} style={{ textDecoration: 'none' }}>
              {text}</a>
          </span>
        </ListGroup.Item>
        {state === 'active' ? renderPicActive() : renderPicSuccess()}
        <a href="#" onClick={handleRemoveTask(id)} className="d-flex flex-column justify-content-center align-items-center">
          <img src={del} style={{width: "2rem"}}></img>
        </a>
      </Container>
    );

  };

  return (
    <div className="mt-5">
      <ListGroup className="list-group">
        {tasks.map(renderTask)}
      </ListGroup>
    </div>
  );

};

export default connect(mapStateToProps, actionCreators)(TaskList);