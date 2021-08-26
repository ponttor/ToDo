import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from './TaskList.jsx';
import Filter from './Filter.jsx';
import AddTask from './AddTask.jsx';

const App = () => (
  <>
    <div className="min-vw-100 min-vh-100">
      <div className="d-flex justify-content-center">
        <Filter />
      </div>
      <TaskList />
      <AddTask />
    </div>
  </>
);

export default App;
