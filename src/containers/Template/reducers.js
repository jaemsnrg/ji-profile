import { DUMMYACTION_REQUEST, DUMMYACTION_SUCCESS, DUMMYACTION_FAILURE } from './actions';

const eReducer = (state = {}, action) => {
  switch (action.type) {
    case DUMMYACTION_REQUEST:
      return {
        ...state,
        info: 'requested',
      };
    case DUMMYACTION_SUCCESS:
      return {
        ...state,
        info: 'success',
      };
    case DUMMYACTION_FAILURE:
      return {
        ...state,
        info: 'failed',
      };
    default:
      return state;
  }
};
export default eReducer;
