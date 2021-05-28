import {LOGIN, ADD_EVENT, LOG_OUT, LOAD_EVENTS, RESTORE_DATA,CREATING_NEW_EVENT, EDIT_EVENT, DONE_EDIT_EVENT} from "../actions";

const initialState = {
    user_id: null,
    events:[],
    newEventId: null,
    editingEvent: null,
    username:""
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                user_id: action.payload,
                username: action.userName
            }
        case ADD_EVENT:
            return {
                ...state,
                events: [...state.events, action.payload]
            }
        case CREATING_NEW_EVENT:
            return{
                ...state,
                newEventId: action.payload
            }

        case LOAD_EVENTS:
            return{
                ...state,
                events: action.payload
            }

        case LOG_OUT:
            return initialState;

        case RESTORE_DATA:
            return action.payload;
        
        case EDIT_EVENT:
            return{
                ...state,
                editingEvent: action.payload
            }
        case DONE_EDIT_EVENT:
            return{
                ...state,
                editingEvent:null
            }
            
        default:
            return state
    }
}

export default reducer;