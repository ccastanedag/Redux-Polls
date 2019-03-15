import autherUsers from './authedUser'
import users from './users'
import polls from './polls'
import {combineReducers} from 'redux'

export default combineReducers({
  autherUsers,
  users,
  polls
})