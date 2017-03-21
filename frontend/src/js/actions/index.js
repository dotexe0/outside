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
