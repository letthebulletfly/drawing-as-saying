import { ajax } from 'rxjs/observable/dom/ajax'

// Action Types
const FETCH_REPOS = 'FETCH_REPOS'
const FETCH_REPOS_FULFILLED = 'FETCH_REPOS_FULFILLED'

// Action Creators
export const fetchRepos = (username) => ({ type: FETCH_REPOS, payload: username })
export const fetchReposFulfilled = response => ({ type: FETCH_REPOS_FULFILLED, payload: response })

// Epics - for redux observable
export const fetchReposEpic = action$ => (
  action$.ofType(FETCH_REPOS)
    .mergeMap(action =>
      ajax.getJSON(`https://api.github.com/users/${action.payload}/repos`)
        .map(response => fetchReposFulfilled(response))
    )
)

// Reducers
const initialState = {
  repos: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPOS_FULFILLED:
      return {
        ...state,
        // `login` is the username
        repos: action.payload
      }
    default:
      return state
  }
}
