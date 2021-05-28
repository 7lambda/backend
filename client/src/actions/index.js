import {axiosWithAuth} from "../helps/axiosWithAuth";
export const LOGIN = "LOGIN";
export const ADD_EVENT = "ADD_EVENT";
export const LOG_OUT = "LOG_OUT";
export const LOAD_EVENTS = "LOAD_EVENTS";
export const RESTORE_DATA = "RESTORE_DATA";
export const CREATING_NEW_EVENT = "CREATING_NEW_EVENT";
export const EDIT_EVENT = "EDIT_EVENT";
export const DONE_EDIT_EVENT = "DONE_EDIT_EVENT";

export const restoreData = (backup)=>{
    return {type:RESTORE_DATA, payload: backup}
}

export const login = (id,events,username) => {
    return(dispatch) => {
       dispatch({type:LOGIN, payload:id, userName: username});
       dispatch({type:LOAD_EVENTS, payload: events});
    }
}

export const getEvents = () => {
    return (dispatch) => {
        axiosWithAuth()
            .get("/api/events/getall")
            .then(res => {
                dispatch({ type: LOAD_EVENTS, payload: res.data })
            })
            ;
    }
}

export const addEvent = (event) =>{
    return (dispatch)=>{
        axiosWithAuth().post("/api/events", event)
        .then(res=>{
            dispatch({type: ADD_EVENT, payload:res.data});
            dispatch({type:CREATING_NEW_EVENT, payload: res.data.event_id});
        })
        .catch(error=>{
            console.log(error);
        })
    }
}

export const editEvent = (event)=>{
    return {type:EDIT_EVENT, payload: event}
}

export const finishEditEvent = ()=>{
    return {type:DONE_EDIT_EVENT}
}

export const reset = e=>{
    return {type:LOG_OUT};
}