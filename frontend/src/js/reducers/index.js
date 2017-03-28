import { SIGNUP, LOGIN, CREATE_EVENT, GET_ALL_EVENTS, DELETE_EVENT } from '../actions';

const initialState = {
  loading: false,
  events: [],
  user: {
    events: []
  }
}

export default (state=initialState, action) => {
  switch(action.type) {
    case SIGNUP:
    console.log('signup: ', action.payload);
    return {
      ...state,
      user: {
        ...action.payload
      }
    }

    case LOGIN:
    console.log('login: ', action.payload);
    return {
      ...state,
      user: {
        _id: action.payload._id,
        email: action.payload.email,
        events: [...state.user.events, ...action.payload.events]
      }
    }

    case CREATE_EVENT:
      console.log("create event", action.payload.event);
      return {
        ...state,
        events: [...state.events, action.payload.event]
      }

    case GET_ALL_EVENTS:
      console.log("getting all events: ", action.payload);
      return {
        events: [...action.payload.events]
      }
    case DELETE_EVENT:
    return {
      events: state.events.filter(item => item._id !== action.payload)
    }
    default:
      return state;
  }

}
