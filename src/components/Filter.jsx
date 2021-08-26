import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import cn from 'classnames';

const mapStateToProps = (state) => {
  const { tasks: { currentFilterName } } = state;
  return { currentFilterName };
};

const actionCreators = {
  setTasksFilter: actions.setTasksFilter,
};


const Filter = ({
  setTasksFilter,
  currentFilterName,
}) => {

  const handleSetTasksFilter = (filterName) => () => {
    setTasksFilter({ filterName });
  };

  const allButtonStyles = {
    backgroundColor: '#ffcccc',
    border: '0',
  }

  const activeButtonStyles = {
    backgroundColor: '#ffcccc',
    border: '0',
  }

  const finishedButtonStyles = {
    backgroundColor: '#ACDF87',
    border: '0',
  }

  const classNamesActive = cn('btn text-white', {
    'bg-danger': currentFilterName === 'active'
  })

  const classNamesFinished = cn('btn text-white', {
    'bg-success': currentFilterName === 'finished'
  })

  return (
    <container className="bm-2 d-flex">
      <div><button className="bg-info btn text-white" style={allButtonStyles} onClick={handleSetTasksFilter('all')}>All</button></div>
      <div><button style={activeButtonStyles} className={classNamesActive} onClick={handleSetTasksFilter('active')}>Active</button></div>
      <div><button style={finishedButtonStyles}  className={classNamesFinished} onClick={handleSetTasksFilter('finished')}>Completed</button></div>
    </container>
  )

}

export default connect(mapStateToProps, actionCreators)(Filter);
