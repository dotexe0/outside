import  { createEvent } from '../js/actions';

describe('create event action', () => {
  describe('#createEvent()', () => {
    it('should return a created event', () => {
      const exptectedResult = {
        type: CREATE_EVENT,
        userId,
        event
      };

      expect(createEvent('userId'))
    })
  })
})
