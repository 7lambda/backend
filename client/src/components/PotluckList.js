import React, { useEffect } from "react";

import Potluck from "../components/Potluck";
import {EventsContainer} from "./StyledComponents";
import {useHistory} from "react-router-dom";
import { axiosWithAuth } from "../helps/axiosWithAuth";
import {editEvent,getEvents} from "../actions";
import {connect} from "react-redux";





const PotluckList = (props) =>{
    const {push} = useHistory();
    
    const cancelEvent = (id)=>{
        axiosWithAuth().delete(`/api/events/${id}`)
        .then(res=>{
            console.log("reach");
            props.dispatch(getEvents());
        })
    }
    const edit = (event)=>{
        //change the editing event property inside the redux state
        props.dispatch(editEvent(event));
        push("/protected/create");
    }

    return(
            <EventsContainer>
                {props.events.map(event=>{
                    return <Potluck key={event.event_id} event={event} push={push} all={props.all} cancelEvent={cancelEvent} edit={edit}/>
                })}
            </EventsContainer>
    )
    
}
export default connect()(PotluckList);