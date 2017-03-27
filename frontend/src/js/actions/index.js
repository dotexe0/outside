import axios from 'axios';

export const CREATE_EVENT = 'CREATE_EVENT';
export const createEvent = event => async dispatch => {
  try {
    const res = await axios.post('/api/events', event);
    console.log("res", res);
    dispatch({ type: CREATE_EVENT, payload: res.data });
  } catch (e) {
    console.log("error, ", e);
  }
};

export const GET_ALL_EVENTS = 'GET_ALL_EVENTS';
export const getAllEvents = () => async dispatch => {
  try {
    const res = await axios.get('/api/events');
    console.log("res", res);
      dispatch({ type: GET_ALL_EVENTS, payload: res.data });
    // console.log("events", events);
  } catch (e) {
    console.log("error getting all..", e)
  }
};


export const DELETE_EVENT = 'DELETE_EVENT';
export const deleteEvent = (id) => async dispatch => {
  try {
    await axios.delete(`/api/events/${id}`);
    dispatch({ type: DELETE_EVENT, payload: id });
    // console.log("events", events);
  } catch (e) {
    console.log("error getting all..", e)
  }
};

export const SIGNUP = 'SIGNUP';
export const signup = (email, password) => async dispatch => {
  try {
    await axios({
      method: 'post',
      url: '/api/signup',
      data: {
        email: email,
        password: password
      }
    })
    .then(res => {
      console.log('res: ', res.data.user);
      const { events } = res.data.user.local;
      dispatch({ type: SIGNUP, payload: { events }});
    })
  } catch (e) {
    console.log('error signing up...', e)
  }
}

