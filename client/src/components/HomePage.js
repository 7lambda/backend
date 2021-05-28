import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import disableScroll from 'disable-scroll'
import styled from "styled-components";
import { withStyles } from '@material-ui/core/styles';
import './font.css'
import Fab from '@material-ui/core/Fab';





const Main = styled.div`
    background-image: url('https://lh3.googleusercontent.com/pw/ACtC-3d9SgUYS7uJsTrvrbbOhCNa5azEP8OU6jw5pJ7mXc7kfle3cMMXE_LTQgKYQpFAm47qenvq2NAp1dojc9ZY1VuY2IHh1l21qvoupXDS8GIJhkXjL7KnqS3-epRBniavwQdSbANDLMu7MJ0ZVA3JmYDDGg=w2700-h1800-no?authuser=0');
    background-attachment: fixed;
    background-size: cover;
    color: #4f4f4f;
    padding: 20%;
    height:100vh;
`
const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    },
});



const Homepage = (props) => {
    console.log(window.location.pathname)
    useEffect(() => {
        if (window.location.pathname === "/") {
            disableScroll.on()
        }
    }, [])

    const { push } = useHistory();
    const enableScrollSignup = () => {
        disableScroll.off()
        push('/sign-up')
    }
    const enableScrollLogin = () => {
        disableScroll.off()
        push('/login')
    }

    const { classes } = props;
    return (
        <Main>
            <h1 className="font-link">The best potluck planner <br />PERIOD.</h1>
            <div className='buton'>
                <Fab variant="extended" className={classes.fab} onClick={() => enableScrollLogin()}> login </Fab>
                <Fab variant="extended" className={classes.fab} onClick={() => enableScrollSignup()}> signup </Fab>
                <Fab variant="extended" className={classes.fab} onClick={() => window.location.href = "https://github.com/7lambda"}> Github</Fab>
            </div>
        </Main>
    )
}

export default withStyles(styles)(Homepage);