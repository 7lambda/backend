import React from "react";
import {getEvents} from "../actions";
import {connect} from "react-redux";
import {axiosWithAuth} from "../helps/axiosWithAuth";
import Button from "@material-ui/core/Button";

const Food = (props) =>{
    const {food} = props;
    
    
    const handleClick = ()=>{
        if(!food.username){
            const data = {
                is_attendings:true
            }
            axiosWithAuth().put(`/api/attendeeandfood/${food.attendeeandfood_Id}`, data)
            .then(res=>{
                props.dispatch(getEvents());
            })
        }
    }

    return(
        <div>
            <h4>{food.food_name}</h4>
            <Button onClick={handleClick}
                color='secondary'
                fullWidth
                variant='contained'
                disabled={food.username} 
                >{food.username?food.username:"I can bring this!"}
            </Button>
        </div>
        
        
    )
}

export default connect()(Food);