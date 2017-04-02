import reducer from '../js/reducers/userReducer';

import { createEvent } from '../js/actions';


describe('create event reducer', () => {
  describe('#createEvent()', () => {
    it('should return state with new event added', () => {
      const initialState = {
        loading: false,
        publicEvents: [],
        user: {
          events: [],
          isAuthenticated: false
        }
      }

      const expectedResult = {
        ...state,

      }
      expect(reducer(initialState, createEvent('userId', 'event'))).toEqual(expectedResult);
    })
  })
})
