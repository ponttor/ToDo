import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/index.js';
import _ from 'lodash'

const tasks = handleActions({
  [actions.addTask](state, { payload: { task } }) {
    const { byId, allIds } = state;

    return {
      ...state,
      byId: { ...byId, [task.id]: {...task, state: 'active' } },
      allIds: [task.id, ...allIds],
    };
  },
  [actions.removeTask](state, { payload: { id } }) {
    const { byId, allIds } = state;
    return {
      byId: _.omit(byId, id),
      allIds: _.without(allIds, id),
    };
  },
  
  [actions.toggleTaskState](state, { payload: { id } }) {
    const task = state.byId[id];
    const newState = (task.state === 'active') ? 'finished' : 'active';
    const updatedTask = { ...task, state: newState };
    return {
      ...state,
      byId: { ...state.byId, [task.id]: updatedTask },
    };
  },

  [actions.setTasksFilter](state, { payload: { filterName } }) {
    return {
      ...state,
      currentFilterName: filterName,
    };
  },
}, { byId: {}, allIds: [], currentFilterName: 'all' });
  
const text = handleActions({
  [actions.addTask]() {
    return '';
  },
  [actions.updateNewTaskText](_state, { payload }) {
    return payload.text;
  },
}, '');


export default combineReducers({
  tasks,
  text,
});
