import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { signout, isAuthenticated } from '../auth'
import DefaultProfile from "../images/garageguide-logo.jpg"

const isActive = (history, path) => {
    if(history.location.pathname === path) return { color: "#333" }
        else return { color: "#fff" };
};

const Menu = ({ history }) => (
    <div>
        <ul className="nav nav-tabs bg-info mt-10" style={{textAlign: 'right'}}>
            <li>
            <img style={{height: "75px", width: "auto"}}
                    className="img-thumbnail"
                    src={`${DefaultProfile}`}
                    onError={ i => (i.target.src = `${DefaultProfile}`)} 
                    alt="Garage Guide logo" />
            </li>
            <li className="nav-item">
                <Link className = "nav-link" 
                      style = { isActive(history, "/") } 
                      to="/"> Home
                </Link>
            </li>

            <li className="nav-item">
                <Link className = "nav-link" 
                      style = { isActive(history, "/users") } 
                      to="/users"> Shops
                </Link>
            </li>

            {/* <li className="nav-item">
                <Link className = "nav-link" 
                      style = { isActive(history, "/") } 
                      to="/dealers"> Dealers
                </Link>
            </li> */}

            { !isAuthenticated() && (
                 <>
                    <li className="nav-item">
                        <Link className = "nav-link" 
                              style = { isActive(history, "/signin") } 
                              to="/signin"> Sign In
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className = "nav-link" 
                              style = { isActive(history, "/signup") } 
                              to="/signup"> Sign Up
                        </Link>
                    </li>
                 </>
            )}
            { isAuthenticated() && (
             <>

                <li className="nav-item">
                    <Link to = {`/findpeople`}
                          style = {isActive(history,`/findpeople`)}
                          className = "nav-link">
                      Find Shops
                    </Link>  
                </li>

                <li className="nav-item">
                    <Link to = {`/post/create`}
                          style = {isActive(history,`/post/create`)}
                          className = "nav-link">
                      Create Post 
                    </Link>  
                </li>

                <li className="nav-item">
                    <Link to = {`/user/${isAuthenticated().user._id}`} 
                          style = { isActive(history, `/user/${isAuthenticated().user._id}`
                          )} 
                          className = "nav-link">
                      { `${isAuthenticated().user.name}'s profile` }
                    </Link>  
                </li>

                <li className="nav-item">
                   <span className = "nav-link" 
                      style = { isActive(history, "/signup"),
                              { cursor: "pointer", color: "#fff" } } 
                      onClick = {() => signout(() => history.push('/'))}>  
                      Sign Out
                   </span>
                </li>
             </>
            ) }
        </ul>
    </div>
);

export default withRouter(Menu);

