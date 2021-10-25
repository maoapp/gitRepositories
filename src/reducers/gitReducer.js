//@ action Types
import {EXAMPLE} from '../constants/actionTypes';

const initialData = {
  example: '',
};

const gitReducer = (state = initialData, action) => {
  switch (action.type) {
    case EXAMPLE: {
      return {
        ...state,
        example: action.payload.example,
      };
    }
    default:
      return state;
  }
};

export default gitReducer;
