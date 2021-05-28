import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { axiosWithAuth } from "../helps/axiosWithAuth";
import Food from "./Food";

import styled from "styled-components";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(3)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  }));

const FormContainer = styled.div`
    background-image: url('https://lh3.googleusercontent.com/pw/ACtC-3datlkm4EXvY5st9jCe5XA3H2LfCbMdZP4RWRk0IawTsVzUnCGnPLMK9ZqtL33htbxvO55xDLkAFcM4dyW08iXbolnNnqaDeHh9Lhlhu76RxRVT16-sXQb-56DVEWlzROaN5tsQw-LIZKiM9_L5_2F2AQ=w2400-h1210-no?authuser=0');
    background-repeat: no-repeat;
    background-position: top; 
    background-attachment: fixed;
    background-size: cover;
    color: #4f4f4f;
    padding: 20%;
`

const PotluckPage = (props)=>{
    const {id} = useParams();
    const classes = useStyles();
    const [potluck, setPotluck] = useState(null);

    useEffect(()=>{
        axiosWithAuth().get(`/api/events/${id}/event`)
        .then(res=>{
            setPotluck(res.data);
            console.log(res.data);
        })
    },[props.state])

    return(
        <FormContainer>
            <Container component="main" maxWidth="sm" style={{backgroundColor: 'white', paddingTop: '.1rem', paddingBottom: '3%', paddingLeft: '3%', paddingRight: '3%', borderRadius: '3%'}}>
                <CssBaseline />
                    
                <div className={classes.paper}>{potluck &&
                    <Typography component="h2" variant="h5">
                        <strong>{`${potluck.event_name} is taking place at`}<br></br>
                        {potluck.street_address}<br></br>
                        {`${potluck.city}, ${potluck.state}`}<br></br>
                        {potluck.zip}
                        <br></br><br></br>
                        {`Event date: ${potluck.date}`}
                        <br></br><br></br>
                        {`Event time: ${potluck.time}`}</strong>
                        <br></br><br></br>
                        {potluck.attendees.length!==0 && potluck.attendees.map(food=>{
                            return <Food food={food}/>
                        })}
                    </Typography>}
                    <form className={classes.form}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={()=>props.history.push("/protected")}>
                            Done
                        </Button>
                    </form>
                </div>
            </Container>
        </FormContainer>
    )
}

export default connect(state=>{
    return{state}
})(PotluckPage);