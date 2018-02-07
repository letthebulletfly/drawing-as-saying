import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'
import bullet, { fetchReposEpic } from './bullet'

export const rootEpic = combineEpics(
  fetchReposEpic
  // ... other epics
)

export const rootReducer = combineReducers({
  bullet
  // ... other reducers
})
