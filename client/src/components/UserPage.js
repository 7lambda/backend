import React, { useEffect} from "react";
import PotluckList from "./PotluckList";
import {MainDiv, ButtonDiv, UserDiv, PotluckButton} from './StyledComponents';
import {reset,restoreData} from "../actions";
import {connect} from "react-redux";


const UserPage = (props)=>{


    useEffect(()=>{
        const userData = localStorage.getItem("user-data");
        let backup;
        if(userData && !props.state.user_id){
            backup = JSON.parse(userData);
            props.dispatch(restoreData(backup));
        }else if( userData && props.state.user_id){
            backup = JSON.stringify(props.state);
            localStorage.setItem("user-data",backup);
        }
        else{
            backup = JSON.stringify(props.state);
            localStorage.setItem("user-data",backup);
        }
    },[props.state]);



    const logout = ()=>{
        props.dispatch(reset());
        localStorage.removeItem("token");
        localStorage.removeItem("user-data");
        props.history.push("/");
    }

    return (
        <MainDiv>

            <UserDiv>
            
                <ButtonDiv>
                <h2>{props.state.username}</h2>
                <PotluckButton onClick={()=>props.history.push("/protected/create")}>Create Potluck</PotluckButton>
                <PotluckButton onClick={()=>props.history.push("/protected/user-events")}>Edit Potluck</PotluckButton>
                <PotluckButton onClick={logout}>Log Out</PotluckButton>
                
                </ButtonDiv>
            </UserDiv>
 
            {props.state.events.length!==0 && <PotluckList events={props.state.events} all={true}/>}

        </MainDiv>
    )
}


export default connect(state=>{
    return{state};
})(UserPage);