import {UPDATE_DATA} from './Actions';

  const initialState = {
    data: '',
  };
  const dataReducer = (state = initialState, action) => {

    switch (action.type) {
      case UPDATE_DATA: {
        const newState = Object.assign({}, state, { _data: action.data });
        return newState;
      }
      default:
        return state;
    }
};

export default dataReducer;
