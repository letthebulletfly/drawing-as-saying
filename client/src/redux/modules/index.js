import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'
import bullet, { fetchMemberEpic } from './bullet'

export const rootEpic = combineEpics(
  fetchMemberEpic
  // ... other epics
)

export const rootReducer = combineReducers({
  bullet
  // ... other reducers
})
