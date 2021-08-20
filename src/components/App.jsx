import React from 'react';
import TaskList from './TaskList/TaskList.jsx';
import Filter from './Filter.jsx';
import AddTask from './AddTask.jsx';
import Header from './Header/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const App = () => (
  <>
    <Container className="bg-light pb-3" style={{height: '100%'}}>
    <Header />
    <AddTask />
    <Filter />
    <TaskList />
    </Container>
  </>
);

export default App;
