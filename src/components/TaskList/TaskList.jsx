import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index.js';
// import cn from 'classnames';
import { ListGroup, Button, Container, Row, Col } from 'react-bootstrap'
import { filteredTasksSelector } from '../../selectors/index.js';


// const mapStateToProps = (state) => {
//   const { tasks: { byId, allIds } } = state;
//   const tasks = allIds.map((id) => byId[id]);
//   console.log(tasks);
//   return { tasks };
// };

const mapStateToProps = (state) => {
  const tasks = filteredTasksSelector(state);
  console.log(state)
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
  const closeButtonStyle = {
    backgroundColor: '#fe8484',
    marginLeft: '8px',
    border: '0',
  };

  const renderTask = ({ text, id, state }) => {
    // const themeToClasses = {
    //   finished: 'bg-success text-dark',
    //   active: 'bg-light text-dark',
    // };

    // const currentThemeClass = themeToClasses[state];

    // const classes = cn({
    //   'list-group-item d-flex': true,
    //   [currentThemeClass]: true,
    // });

    const taskStyle = state === 'active' ?
    {
          backgroundColor: '#ffcccc',
          textDecoration: 'none',
          border: '0', 
        } :
        {
          backgroundColor: '#009900',
          textDecoration: 'none',
          border: '0',
        }


    if (text.length === 0) {
      return null;
    }
    return (
      <Container className="mb-2 d-flex justify-content-center">

        <ListGroup.Item key={id} style={taskStyle}>
        {/* <ListGroup.Item key={id} className={classes}> */}
          <span className="mr-auto">
            <a href="#" className="text-reset" onClick={handleToggleTaskState(id)} style={{ textDecoration: 'none' }}>
              {state === 'active' ? text : <s>{text}</s>}</a>
          </span>
        </ListGroup.Item>
        <Button type="button" aria-label="Close" style={closeButtonStyle} onClick={handleRemoveTask(id)}>
          <span >&times;</span>
        </Button>
      </Container>
    );

  };

  return (
    <div className="mt-3">
      <ListGroup className="list-group">
        {tasks.map(renderTask)}
      </ListGroup>
    </div>
  );

};

export default connect(mapStateToProps, actionCreators)(TaskList);