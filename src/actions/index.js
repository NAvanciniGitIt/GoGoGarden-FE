const BASE_URL = "http://localhost:3001"
const PLANT_INDEX = BASE_URL + "/plants/"
const COMMENT_URL = BASE_URL + "/comments"



export const getPlants = () => {
  return dispatch => {
    dispatch({ type: "LOADING" })
    fetch(PLANT_INDEX)
      .then(resp => resp.json())
      .then(plants => dispatch({ type: "SET_PLANTS", plants }))
  }
}

export const getPlant = (id) => {
  return dispatch => {
    dispatch({type: "LOADING"})
    fetch (PLANT_INDEX + id)
    .then(resp=> resp.json())
    .then(plant => dispatch({type: "SET_PLANT", plant}))
  }
}


export const addPlant = (plant, history) => {
  return dispatch => {
    fetch(PLANT_INDEX, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ plant })
    })
      .then(resp => resp.json())
      .then(plant => {
        dispatch({ type: "ADD_PLANT", plant })
        history.push("/plantdex")
      })
  }
}

export const addComment = (comment, history) => {
  return dispatch => {
    fetch(COMMENT_URL, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Conent-Type": "application/json"
      },
      body: JSON.stringify({ comment })
    })
    .then(resp => resp.json())
    .then(comment => {
      dispatch({ type: "ADD_COMMENT", comment})
      history.push(history.location.pathname)
    })
  }
}

