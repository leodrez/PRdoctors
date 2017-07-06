import GET_ALL_DOCTORS from '../actions/index.js';

function prDoctorsApp(state = [], action) {
  switch (action.type) {
    case GET_ALL_DOCTORS:
      return [
        ...state, 
        {
          name: action.name 
        }
      ]
  }
}
