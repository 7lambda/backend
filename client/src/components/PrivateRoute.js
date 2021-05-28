
import React from "react";

import {Route, Redirect} from "react-router-dom";


const PrivateRoute = ({component:Component,...rest})=>{
    return <Route {...rest} render={  props=>{
                const token = localStorage.getItem("token");
                if(token){
                    return <Component {...props} />
                }
                else{
                    return <Redirect to="/"/>
                }
            }}
    />
}

export default PrivateRoute;