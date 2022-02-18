//higher order component (HOC) -  a component (HOC) that renders another component
//2nd comp = info
//HOCS ALLOW
//reuse code
//render hijacking
//prop manipulation
//abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1> Info </h1>
        <p>The info is : {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This is private info: don't share</p>
            {props.isAdmin && <p>This is privy</p>}
            <WrappedComponent {...props}/>
        </div>
    )

};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please login to see details</p>}
        </div>
    )
}

//WrappedComponent must start with a capital since it is a component you wanna render

const AdminInfo = withAdminWarning(Info);
//info gets passed as first argument to withadminwarning function
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin = {true} info = "There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated= {true} info = "There are the details" />, document.getElementById('app'));