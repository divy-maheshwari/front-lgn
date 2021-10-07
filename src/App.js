import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './navbar';
import Home from './components/home'
import Register from './components/register'
import LogIn from './components/login'
import Profile from './components/profile'

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/signIn" component={LogIn} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </Router>
    )
} 

export default App;