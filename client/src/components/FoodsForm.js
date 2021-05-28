import React, {useState}  from 'react';
import FoodList from "./FoodList";
import {connect} from "react-redux";
import { axiosWithAuth } from '../helps/axiosWithAuth';

import styled from 'styled-components'
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Grid from "@material-ui/core/Grid";
import LocalDiningIcon from '@material-ui/icons/LocalDining';
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
    background-image: url('https://253qv1sx4ey389p9wtpp9sj0-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Pizza_for_Potluck_Photo_Credit_Penny_De_Los_Santos.jpg.jpg');
    background-repeat: no-repeat;
    background-position: top; 
    background-attachment: fixed;
    background-size: cover;
    color: #4f4f4f;
    padding: 20%;
`

const FoodsForm = (props)=>{
    const [foods, setFoods] = useState([]);
    const [foodName, setFoodName] = useState("");
    const classes = useStyles();

    
    const updateInput = (e)=>{
        setFoodName(e.target.value);
    }
    const addToList = (e)=>{
        e.preventDefault();
        if(foodName){
            setFoods([...foods, foodName]);
            axiosWithAuth().post("/api/attendeeandfood", 
            {
                event_id: props.state.newEventId, 
                food_name: foodName})
            .then(res=>{
                setFoodName("");
            })
            .catch(error=>{
                console.log(error);
            })
        }
        
    }
    const connectFoodsToEvent = ()=>{
        props.history.push("/protected");
    }
    return (
        <FormContainer>
            <Container component="main" maxWidth="xs" style={{backgroundColor: 'white', paddingTop: '.1rem', paddingBottom: '3%', paddingLeft: '3%', paddingRight: '3%', borderRadius: '3%'}}>
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LocalDiningIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        List of Food
                    </Typography>
                    <form className={classes.form} onSubmit={addToList}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    name="food"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="food"
                                    label="What food should guests bring?"
                                    onChange={updateInput}
                                    value = {foodName}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}>
                            Add Item
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                            </Grid>
                        </Grid>
                        {foods.length !== 0 && <FoodList foods={foods} setFoods={setFoods}/>}
                        <br></br>
                        <Button onClick={connectFoodsToEvent}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary">
                            List Complete!
                        </Button>
                    </form>
                </div>
            </Container>
        </FormContainer>
    )
}

export default connect(state=>{
    return{state}
})(FoodsForm);