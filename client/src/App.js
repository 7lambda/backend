import './App.css';
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserPage from "./components/UserPage";
import {Switch, Route} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PotluckForm from "./components/PotluckForm";
import PotluckPage from "./components/PotluckPage"
import FoodsForm from "./components/FoodsForm";
import UserEvents from './components/UserEvents';



function App() {
  return (
    <div>
        <Switch>
            <PrivateRoute exact path="/protected" component={UserPage}/>
            <PrivateRoute exact path="/protected/create" component={PotluckForm}/>
            <PrivateRoute exact path="/protected/event/:id" component={PotluckPage} />
            <PrivateRoute exact path="/protected/add-foods" component={FoodsForm} />
            <PrivateRoute exact path="/protected/user-events" component={UserEvents}/>
             
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/sign-up">
              <SignUp/>
            </Route>
            <Route exact path="/">
              <HomePage/>
            </Route>
        </Switch>
      </div>
  );
}

export default App;