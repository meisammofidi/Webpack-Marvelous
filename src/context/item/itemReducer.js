import { ADD_ITEM, DELETE_ITEM, CLEAR_FILTER, FILTER_ITEM } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case FILTER_ITEM:
      return {
        ...state,
        filtered: state.items.filter((item) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return item.name.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };

    default:
      return state;
  }
};
