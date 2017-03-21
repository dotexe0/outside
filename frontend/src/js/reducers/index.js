import { CREATE_EVENT } from '../actions';

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
    default:
      return state;
  }

}
