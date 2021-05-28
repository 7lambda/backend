import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../helps/axiosWithAuth";
import {connect} from "react-redux";
import PotluckList from "./PotluckList";
import {Link, useHistory} from "react-router-dom";

import styled from 'styled-components'
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Grid from "@material-ui/core/Grid";
import EditIcon from '@material-ui/icons/Edit';
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
    background-image: url('https://lh3.googleusercontent.com/pw/ACtC-3drUelTdSX0nq3YTziMEf-QvCHYGpclGWHOKrZ4Qi5uRsMWxHt9qXFBmomIYOV2PYYFrssA8ZCrl48RyQkHhgAMcuByq4Be4SkqSCscpFBGhPKkhNsWWkz_q7n0ad5WXxUL4iuIQujgzD0xhFi17WuFxQ=w2048-h1400-no?authuser=0');
    background-repeat: no-repeat;
    background-position: top; 
    background-attachment: fixed;
    background-size: cover;
    color: #4f4f4f;
    padding: 20%;
`

const UserEvents = (props)=>{
    const [userEvents, setUserEvents] = useState(null);
    const {push} = useHistory();
    const classes = useStyles();

    useEffect(()=>{
        if(props.id){
            axiosWithAuth().get(`/api/events/${props.id}/user`)
            .then(res=>{
                setUserEvents(res.data);
            })
        }
        else{
            props.history.push("/protected")
        }
    },[props.data])

    return(
        <FormContainer>
            <Container component="main" maxWidth="md" style={{backgroundColor: 'white', paddingTop: '.1rem', paddingBottom: '3%', paddingLeft: '3%', paddingRight: '3%', borderRadius: '3%'}}>
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <EditIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Your Events
                    </Typography>
                    <form className={classes.form}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                {userEvents && <PotluckList events={userEvents} all={false}/>}
                            </Grid>
                        </Grid>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link onClick={()=>push("/protected")} variant="body3">
                                    Go Back
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </FormContainer>
    )
}

export default connect(state=>{
    return{
        id:state.user_id,
        data: state.events,
    }
})(UserEvents);