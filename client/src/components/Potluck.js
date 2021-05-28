import React from "react";
import {EventDiv} from "./StyledComponents";

const Potluck = (props)=>{
    const {event, push, all, cancelEvent, edit} = props;
    
    if(all){
        return (
            <div>
                <EventDiv>
                    <h1>{event.event_name}</h1>
                    <button onClick={()=>push(`/protected/event/${event.event_id}`)}>View</button>
                </EventDiv>
            </div>
        )
    }
    return(
        <div>
            <EventDiv>
                <h1>{event.event_name}</h1>
                <button onClick={()=>edit(event)}>Edit</button>
                <button onClick={(e)=>{e.preventDefault();cancelEvent(event.event_id)}}>Cancel Event</button>
            </EventDiv>
        </div>
    )
    
}


export default Potluck;