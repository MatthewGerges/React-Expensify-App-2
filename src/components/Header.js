import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to = "/" activeClassName='is-active' exact = {true}>Dashboard</NavLink>
        <br/>
        <NavLink to = "/create" activeClassName='is-active'>Create Expense</NavLink>
        <br/>
        <NavLink to = "/help" activeClassName='is-active'>Get Help</NavLink>
    </header>
);

/*
removed link from header:
<br/>
        <NavLink to = "/edit" activeClassName='is-active'>Edit Expense</NavLink>
*/
//Header willl not have props only route components

//header just takes one element - a div
//switch goes through veery component and stops looking once it found a match 
//so if none match, 404 always matches
//exact will render only if paths exactly match not just include
//switch is basically replaced by a div

//path = url, component = what to show to screen
//div just takes 

export default Header;