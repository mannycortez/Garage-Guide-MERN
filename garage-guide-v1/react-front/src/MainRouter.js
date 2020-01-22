import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './core/Home'
import Menu from './core/Menu'
import SignUp from './user/SignUp'
import SignIn from './user/SignIn'
import Profile from './user/Profile'
import Users from './user/Users'
import Dealers from './user/Dealers'
import EditProfile from './user/EditProfile'
import FindPeople from './user/FindPeople'
import NewPost from './post/NewPost'
import EditPost from './post/EditPost'
import SinglePost from './post/SinglePost'
import PrivateRoute from './auth/PrivateRoute'
import ForgotPassword from "./user/ForgotPassword"



const MainRouter = () => (
    <div>
        <Menu />
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <PrivateRoute exact path="/post/create" component={ NewPost } />
            <Route exact path="/post/:postId" component={ SinglePost } />
            <PrivateRoute exact path="/post/edit/:postId" component={ EditPost } />
            <Route exact path="/users" component={ Users } />
            <Route exact path="/dealers" component={ Dealers } />
            <Route exact path="/signup" component={ SignUp } />
            <Route exact path="/signin" component={ SignIn } />
            <PrivateRoute exact path="/user/edit/:userId" component={ EditProfile } />
            <PrivateRoute exact path="/findpeople" component={ FindPeople } />
            <PrivateRoute exact path="/user/:userId" component={ Profile } />
            
        </Switch>
    </div>
)

export default MainRouter;