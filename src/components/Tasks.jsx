import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';

const mapStateToProps = (state) => {
  const { tasks } = state;
  return { tasks };
};

const actionCreators = {
  removeTask: actions.removeTask,
};

const Tasks = ({ removeTask, tasks }) => {

  const handleRemoveTask = (id) => () => {
    removeTask({ id });
  };
  console.log('start')
  if (tasks.length === 0) {
    return null;
  }

  return (
    <div className="mt-3">
      <ul className="list-group">
        {tasks.map(({ id, text }) => (
          <li key={id} className="list-group-item d-flex">
            <span className="mr-auto">{text}</span>
            <button type="button" className="close" onClick={handleRemoveTask(id)}>
              <span>&times;</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, actionCreators)(Tasks);