import axios from 'axios';
import { browserHistory } from 'react-router';
import {toastr} from 'react-redux-toastr';


export const CREATE_EVENT = 'CREATE_EVENT';
export const createEvent = (userId, event) => async dispatch => {
  console.log('userId: ', userId);
  console.log('event: ', event);
  try {
    const res = await axios.post('/api/user/event', {event, userId});
    console.log("returned res.data by backend: ", res.data);
    dispatch({ type: CREATE_EVENT, payload: res.data });
    toastr.success('Successfully', 'Event created!');
    browserHistory.push('/myEvents');
  } catch (e) {
    console.log("error, ", e);
  }
};

export const GET_ALL_USER_EVENTS = 'GET_ALL_USER_EVENTS';
export const getAllUserEvents = (userId) => async dispatch => {
  console.log("get all users id", userId);
  try {
    const res = await axios.post('/api/user/getEvents', { userId });
    console.log("res from backend", res.data.events);
    dispatch({ type: GET_ALL_USER_EVENTS, payload: res.data });
    if (res.data.events.length == 0) {
      toastr.info('No events found!', 'Make sure you have an account or are logged in.');
    } else if (res.data.events === []) {
      toastr.info('No events created yet!');
    } else {
      toastr.success('All events successfully imported.');
    }
  } catch (e) {
    console.log("error getting all..", e);
  }
};

export const GET_ALL_PUBLIC_EVENTS = 'GET_ALL_PUBLIC_EVENTS';
export const getAllPublicEvents = () => async dispatch => {
  try {
    const res = await axios.get('/api/public/events');
    console.log("res", res);
      dispatch({ type: GET_ALL_PUBLIC_EVENTS, payload: res.data });
    // console.log("events", events);
  } catch (e) {
    console.log("error getting all..", e);
  }
};

export const DELETE_EVENT = 'DELETE_EVENT';
export const deleteEvent = (id) => async dispatch => {
  console.log('delete id: ', id);
  try {
    await axios.delete(`/api/events/${id}`);
    toastr.error('Deleted', 'Event deleted!');
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
      const { _id } = res.data.user;
      const { events, email } = res.data.user.local;
      dispatch({ type: SIGNUP, payload: { events, email, _id }});
      toastr.success('Success', `${email} account created!`);
      browserHistory.push('/createEvent');
    })
  } catch (e) {
    console.log('error signing up...', e)
  }
}

export const LOGIN = 'LOGIN';
export const login = (email, password) => async dispatch => {
  try {
    await axios.post('/api/login', { email, password })
    .then(res => {
      console.log('res: ', res.data.user);
      const { _id } = res.data.user;
      const { events, email } = res.data.user.local;
      dispatch({ type: LOGIN, payload: { events, email, _id }});
      toastr.success(`${email} logged in!`, ':-)');
      browserHistory.push('/createEvent');
    })
  } catch (e) {
    toastr.warning(`Error logging in.`, 'Make sure username and password match!');
    // console.log('error loging in...', e);
        browserHistory.push('/login');
  }
}

export const LOGOUT = 'LOGOUT';
export const logout = () => async dispatch => {
  try {
    await axios.get('/api/logout');
    dispatch({ type: LOGOUT });
    toastr.warning(`Successfully logged out!`, 'Until next time...');

  } catch (e) {
    throw Error(e);
  }
}
