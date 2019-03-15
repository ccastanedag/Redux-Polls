import { RECEIVE_POLLS, ADD_POLL } from '../actions/polls'
import { ADD_POLL } from '../actions/polls'

export default function polls(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS:
      return {
        ...state,
        ...action.polls
      }
    case ADD_POLL:
      return {
        ...state,
        [action.poll.id]: action.poll
      }
    case ADD_POLL:
      const poll = action.poll
      const { author, id } = poll
      return {
        ...state,
        [author]: {
          ...state[author],
          polls: state[author].polls.concat([id])
        }
      }
    default:
      return state
  }
}