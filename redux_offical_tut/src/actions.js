// action types
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
}

// action creators

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index}
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter}
}

// actions are plain JavaScript objects
// actions must have a `type`
// {
//   type: ADD_TODO,
//   text: 'Build my first Redux app'
// }


// action creators
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}
