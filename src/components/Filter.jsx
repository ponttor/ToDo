import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import { Button, Container } from 'react-bootstrap'


// const filters = [['all', 'All Tasks'], ['active', 'Active Tasks'], ['finished', 'Finished Tasks']];

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

//   const renderFilter = ([state, name]) => {
//     if (currentFilterName === state) {
//       return name;
//     }
//     return (
//       <button
//         type="button"
//         key={state}
//         className="btn btn-link border-0 p-0"
//         onClick={handleSetTasksFilter(state)}
//       >
//         {name}
//       </button>
//     );
//   };

//   return (
//     <div className="mt-3 d-flex justify-content-center">
//       {filters.map(renderFilter)}
//     </div>
//   );
// };



  const allButtonStyles = {
    backgroundColor: '#ffcccc',
    border: '0',
  }

  const activeButtonStyles = {
    backgroundColor: '#ffcccc',
    marginRight: '10px',
    marginLeft: '10px',
    border: '0',
  }

  const finishedButtonStyles = {
    backgroundColor: '#009900',
    border: '0',
  }


return(
  <Container className="bm-2 d-flex justify-content-center">
    <Button className="bg-info" style={allButtonStyles} onClick={handleSetTasksFilter('all')}>All</Button>
    <Button style={activeButtonStyles} onClick={handleSetTasksFilter('active')}>Active</Button>
    <Button style={finishedButtonStyles} onClick={handleSetTasksFilter('finished')}>Finished</Button>
  </Container>
)

}

export default connect(mapStateToProps, actionCreators)(Filter);
