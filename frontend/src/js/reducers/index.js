import userReducer from './userReducer';

import { combineReducers } from 'redux'
import {reducer as toastrReducer} from 'react-redux-toastr'

export default combineReducers({
  user: userReducer,
  toastr: toastrReducer // <- Mounted at toastr.
})
