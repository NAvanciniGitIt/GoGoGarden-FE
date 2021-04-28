const initialState = {
  plants: [],
  comments: [],
  loading: true
}

const plantsReducer = (state=initialState, action) => {
  switch(action.type) {
    case "LOADING": 
    return {
      ...state, 
      loading: true
    }

    case "SET_PLANT":
      return {
        ...state,
        loading: false,
        plant: action.plant
      }

    case "SET_PLANTS":
      return {
        ...state,
        loading: false,
        plants: action.plants 
      }

      case "ADD_PLANT":
        return {
          ...state,
          plants: [...state.plants, action.plant]
        }

      case "ADD_COMMENT":
        return{
          loading: false,
          ...state,
          comments: [...state.comments, action.comment],
          plants: [...state.plants, action.comment]
        }
      case "SET_COMMENTS":
        return {
          ...state,
          loading: true,
          comments: action.comments
        }

    default:
      return state; 
  }
}

export default plantsReducer