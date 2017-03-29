import { SIGNUP, LOGIN, CREATE_EVENT, GET_ALL_USER_EVENTS, DELETE_EVENT, GET_ALL_PUBLIC_EVENTS } from '../actions';

const initialState = {
  loading: false,
  publicEvents: [],
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
    if (!action.payload.events) {
      return {
        ...state,
        user: {
          _id: action.payload._id,
          email: action.payload.email,
          events: []
        }
      }
    }
    return {
      ...state,
      user: {
        _id: action.payload._id,
        email: action.payload.email,
        events: [...action.payload.events]
      }
    }

    case CREATE_EVENT:
      console.log("create event", action.payload.event);
      return {
        ...state,
        user: {
          ...state.user,
          events: [...state.user.events, action.payload.event]
        }
      }

    case GET_ALL_USER_EVENTS:
      console.log("getting all user events: ", action.payload.events.events);
      return {
        ...state,
        user: {
          ...state.user,
          events: [...state.user.events, ...action.payload.events.events]
        }
      }

    case DELETE_EVENT:
    return {
      ...state,
      events: state.events.filter(item => item._id !== action.payload)
    }
    case GET_ALL_PUBLIC_EVENTS:
      console.log("getting all PUBLIC events: ", action.payload.events);
      return {
        ...state,
        publicEvents: [...action.payload.events]
      }

    default:
      return state;
  }

}
