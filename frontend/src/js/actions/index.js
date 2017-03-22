import axios from 'axios';

export const CREATE_EVENT = 'CREATE_EVENT';
export const createEvent = event => async dispatch => {
  dispatch({type: CREATE_EVENT});
  try {
    const res = await axios.post('/api/events', event);
    console.log("res", res);
    return res.data;
  } catch (e) {
    console.log("error, ", e);
  }
};

export const GET_ALL_EVENTS = 'GET_ALL_EVENTS';
export const getAllEvents = () => async dispatch => {
  dispatch({ type: GET_ALL_EVENTS });
  try {
    const res = await axios.get('/api/events');
    console.log("res", res);
    // console.log("events", events);
    return res.data;
  } catch (e) {
    console.log("error getting all..", e)
  }
}
