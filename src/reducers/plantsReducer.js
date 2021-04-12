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
        plant: action.plants
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
          plant: [...state.plants, action.plants]
        }

      case "ADD_COMMENT":
        return{
          ...state,
          comments: [...state.comments, action.comment]
        }

    default:
      return state; 
  }
}

export default plantsReducer