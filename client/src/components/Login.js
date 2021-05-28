import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {Link, useHistory} from "react-router-dom";
import {login} from "../actions";
import {connect} from "react-redux";
import {axiosWithAuth} from "../helps/axiosWithAuth";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const initialUserValue = {
    username:"",
    password:""
}

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
    background-image: url('https://lh3.googleusercontent.com/pw/ACtC-3e2b353m9UteXFPdRkobTkBg5uNlp26ix2X2jSOa5m6nwv8cm0edn-S1OFV2BBkgMzlZkp9cSayTuc6eryyurK0D4RMikKkYoGhllesx0dc0l9wYfFBRGw7I_gcwShStVDgQiOHsON9B8XIAuCCgBEpMg=w1260-h600-no?authuser=0');
    background-repeat: no-repeat;
    background-position: top; 
    background-attachment: fixed;
    background-size: cover;
    color: #4f4f4f;
    padding: 20%;
`

const Login = (props)=>{
    const [user, setUser] = useState(initialUserValue);
    const {push} = useHistory();
    const classes = useStyles();

    const updateLoginForm = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    useEffect(()=>{
        if(props.id){
            push("/protected");
        }
    },[])

    const submit = e => {
        e.preventDefault();
        axiosWithAuth().post("/api/auth/login", user)
        .then(res1=>{
            localStorage.setItem("token", res1.data.token);
            return res1.data;
        })
        .then((res1)=>{
            axiosWithAuth().get('/api/events/getall')
            .then(res2 =>{
                const {data} = res2;
                props.dispatch(login(res1.user_id, data, res1.username));
                push('/protected')
            })
        })
        .catch(error=>{
            alert("Username or password is incorrect");
        })
        
    }

    return(
        <FormContainer>
            <Container component="main" maxWidth="xs" style={{backgroundColor: 'white', paddingTop: '.1rem', paddingBottom: '3%', paddingLeft: '3%', paddingRight: '3%', borderRadius: '3%'}}>
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOpenIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Welcome Back
                    </Typography>
                    <form className={classes.form} onSubmit={submit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    name="username"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    onChange={updateLoginForm}
                                    id="username"
                                    label="Username"
                                    autoFocus
                                    value = {user.username}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="password"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="password"
                                    type="password"
                                    label="Password"
                                    onChange={updateLoginForm}
                                    value = {user.password}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}>
                            Sign In
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                            <Link to="/sign-up" variant="body3">
                                Don't have an account? Sign up
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
    return {
        id: state.user_id
    }
})(Login);