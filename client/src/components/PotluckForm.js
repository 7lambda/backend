import React, { useEffect, useState} from 'react'

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { connect } from 'react-redux';
import * as yup from 'yup';
import schema from './validation/Schema'
import {finishEditEvent,addEvent, getEvents} from "../actions";
import { axiosWithAuth } from '../helps/axiosWithAuth';

import styled from "styled-components";

const FormContainer = styled.div`
    background-image: url('https://253qv1sx4ey389p9wtpp9sj0-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Dishes_at_Potluck.jpg');
    background-repeat: no-repeat;
    background-position: top; 
    background-attachment: fixed;
    background-size: cover;
    color: #4f4f4f;
    padding: 20%;
`



const initialFormValues = {
  event_name: '',
  date: "",
  time: "",
  state: "",
  city: "",
  street_address: "",
  zip: "",
  max_attendee: ""
}

const initialFormErrors = {
    event_name: '',
    date: '',
    time: '',
    state: '',
    city: '',
    street_address: '',
    zip: '',
    max_attendee: '',
}


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const PotluckForm = (props) => {
    const classes = useStyles();
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)

    
    useEffect(()=>{
      if(props.event){
        setFormValues(props.event);
      }
    },[])

    const validate = e => {
        const value = e.target.value;
        yup
        .reach(schema, e.target.name)
        .validate(value)
        .then(valid => {
            setFormErrors({
                ...formErrors,
                [e.target.name]: ''
            })
        })
        .catch(err => {
            setFormErrors({
                ...formErrors,
                [e.target.name]: err.errors[0]
            })
        })
    }

   const inputChange = e => {
        validate(e);
        const value = e.target.value;
        setFormValues({ ...formValues, [e.target.name]: value })
    }

   const formSubmit = e => {
        e.preventDefault();
        const newEvent = {
          ...formValues, 
          organizer_id: props.user_id,
          zip: Number(formValues.zip),
          max_attendee: Number(formValues.max_attendee)
        };
        
        if(props.event){
          axiosWithAuth().put(`/api/events/${props.event.event_id}`, newEvent)
          .then(res=>{
            props.dispatch(getEvents());
          })
          .catch(error=>{
            console.log(error.response.data);
          })
          props.dispatch(finishEditEvent());
          props.history.push("/protected/user-events");
        }else{
          props.dispatch(addEvent(newEvent));
          props.history.push("/protected/add-foods");
        }
        
        
    };

    const cancelAction =()=>{
        if(props.event){
          props.dispatch(finishEditEvent());
          props.history.push("/protected/user-events");
        }
        else{
          props.history.push("/protected");
        }
        
    }



  return (
      <FormContainer>
        <Container component="main" maxWidth="xs" style={{backgroundColor: 'white', paddingTop: '.1rem', paddingBottom: '3%', paddingLeft: '3%', paddingRight: '3%', borderRadius: '3%'}}>
              <CssBaseline />
              <div className={classes.paper}>
                
                <Typography component="h1" variant="h5">
                {props.event ? "Edit The Potluck":"Create Your Own Potluck!"}
              </Typography>
              <form className={classes.form} onSubmit={formSubmit}>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      label="Event Name"
                      name='event_name'
                      id='event_name'
                      value={formValues.event_name}
                      onChange={inputChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="date"
                      variant="outlined"
                      required
                      fullWidth
                      id="date"
                      label="Date"
                      autoFocus
                      value={formValues.date}
                      onChange={inputChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="time"
                      variant="outlined"
                      required
                      fullWidth
                      id="time"
                      label="Time"
                      value={formValues.time}
                      onChange={inputChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="city"
                      variant="outlined"
                      required
                      fullWidth
                      label="City"
                      autoFocus
                      value={formValues.city}
                      onChange={inputChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="state"
                      variant="outlined"
                      required
                      fullWidth
                      label="State"
                      autoFocus
                      value={formValues.state}
                      onChange={inputChange}
                      
                    />
                  </Grid>
                    <Grid item xs={12}>
                      <TextField
                        
                        variant="outlined"
                        required
                        fullWidth
                        label="Street Address"
                        type="address"
                        id="streetAddress"
                        name='street_address'
                        placeholder='Address'
                        value={formValues.street_address}
                        onChange={inputChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="zip"
                        variant="outlined"
                        required
                        fullWidth
                        id="zip"
                        type="number"
                        label="Zip Code"
                        autoFocus
                        value={formValues.zip}
                        onChange={inputChange}
                        
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        type="number"
                        label="Max Attendees"
                        autoFocus
                        name='max_attendee'
                        value={formValues.max_attendee}
                        onChange={inputChange}
                      />
                    </Grid>
                  </Grid>
                  
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  // disabled={disabled}
                >
                {props.event ? "Make Change":"Create Potluck"}
                </Button>
               <Button
                  fullWidth
                  variant="contained"
                  color="neutral"
                  onClick={cancelAction}
                >
                  Cancel
                </Button>
                  <Grid container justify="flex-end">
                </Grid>
              </form>
            </div>
          </Container>

          </FormContainer>
  );
}



export default connect(state=>{
    return{
        user_id: state.user_id,
        event: state.editingEvent
    }
})(PotluckForm)