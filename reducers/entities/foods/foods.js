//- Action Constants
const FOOD_ADD_REQUEST = 'FOOD_ADD_REQUEST';
const FOOD_ADD_SUCCESS = 'FOOD_ADD_SUCCESS';
const FOOD_ADD_FAIL = 'FOOD_ADD_FAIL';

//- Actions
export const addFood = food => ({
  types: [FOOD_ADD_REQUEST, FOOD_ADD_SUCCESS, FOOD_ADD_FAIL],
  swagger: api => {
    console.log('api', api);
    return api.default.get_foods_resource().then(result => result.obj);
  },
});

//- State
const initialState = {
  allIds: [],
  byId: {},
  error: false,
  loading: false,
  loaded: false,
};

//- Reducer
export function reducer(state = initialState, action) {
  switch (action.type) {
    case FOOD_ADD_REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case FOOD_ADD_SUCCESS:
      return {
        ...state,
        allIds: [...state.allIds, action.food.id],
        byId: { ...state.byId, [action.food.id]: action.food },
        loading: true,
      };
    case FOOD_ADD_FAIL:
      return {
        ...state,
        error: action.error,
        loaded: false,
        loading: false,
      };
    default:
      return state;
  }
}

//- Selectors
export const getAllFoods = state => state.allIds.map(id => state.byId[id]);