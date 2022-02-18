// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
//provider allows us to pass sotre to all components
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

const store = configureStore();

// console.log('testing')
// addExpense -> waterBill
// addExpense -> Gas bill
// setTextFilter -> bill (2 items) -> water (1 item)
//getVisibleExpenses -> print visible ones to screen

// store.dispatch(addExpense({description: 'water bill', amount: 4500}));
// store.dispatch(addExpense({description: 'gas bill', amount: 100, createdAt: 1000}));
// store.dispatch(addExpense({description: 'Rent', amount: 109500 }));

// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000)
//after 3 seconds call setTextfilter function

//set timeout waits to call function

// const visibleExpenses = getVisibleExpenses(store.getState().expenses, store.getState().filters);
// console.log(visibleExpenses);

//console.log(store.getState());

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


//setting up provider allows us to deine the store provided to all components
//connect reaact redux allows you to pull stuff from store