import { CREATE_EVENT, GET_ALL_EVENTS } from '../actions';

const initialState = {
  loading: false,
  events: []
}

export default (state=initialState, action) => {
  switch(action.type) {
    case CREATE_EVENT:
      console.log("create event", action);
      return {
        ...state,
        events: action.event
      }

    case GET_ALL_EVENTS:
      console.log("getting all events", action);
      return {
        events: action.events
      }
    default:
      return state;
  }

}
