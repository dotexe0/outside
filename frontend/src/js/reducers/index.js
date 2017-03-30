import { SIGNUP, LOGIN, LOGOUT, CREATE_EVENT, GET_ALL_USER_EVENTS, DELETE_EVENT, GET_ALL_PUBLIC_EVENTS } from '../actions';

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
    case LOGOUT:
        // console.log('signup: ', action.payload);
        return {
          initialState
        }
    case CREATE_EVENT:
      console.log("create event", action.payload.event);
      if (!state.user.events) {
          return {
            ...state,
          user: {
            ...state.user,
            events: [action.payload.event]
          }
        }
      }
      return {
        ...state,
        user: {
          ...state.user,
          events: [...state.user.events, action.payload.event]
        }
      }

    case GET_ALL_USER_EVENTS:
      console.log("getting all user events: ", action.payload.events.events);
      if (action.payload.events.events === undefined) {
        return {
          ...state,
          user: {
            ...state.user,
            events: [...state.user.events]
          }
        }
      }
      return {
        ...state,
        user: {
          ...state.user,
          events: [...action.payload.events.events]
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
