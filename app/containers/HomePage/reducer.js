import {FETCH_DIALOG} from './actions.js';

const INITIAL_STATE = { dialog: { dialog: []} }; //message null holds a single message



export default function (state = INITIAL_STATE, action) {

	console.log(action.type);

  switch(action.type) {
    //reducer return new object when new state is returned
    case 'FETCH_DIALOG':
      	console.log("FETCH_DIALOG ", action.payload.data)
      	var newState =  { ...state, dialog: action.payload.data };
       	
        
    return state;

    case 'FETCH_DIALOG_FULFILLED':
         console.log("promise returned ", action.payload.data)
      
     	   var newState =  { ...state, dialog: action.payload.data };
         console.log("fetched fulfilled ", newState);

    return newState;

    case 'FETCH_DIALOG_REJECTED':
          console.log("promise rejected " + action.payload.data)
        
        	var newState =  { ...state, all: action.payload.data };
         	console.log(newState);

    return newState;

    default:
      return state;
  }
}
