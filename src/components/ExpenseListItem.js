import React from 'react';
//import { connect } from 'react-redux';
//import { removeExpense } from '../actions/expenses';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({dispatch, description, amount, createdAt, id}) => (
    //destructuring props object
    <div>
        <Link to = {`/edit/${id}`}>
        <h3>{description}</h3>
        </Link>
        <p>{amount} = {createdAt}</p>
    </div>
)


//not props.dispatch just dispatch!!
//because Because the connect function intercepts the props coming from {...expense} and passes those along with dispatch into the component it wraps.

// store.dispatch(removeExpense({id: expenseOne.expense.id}));


// const MapStateToProps = (state) => {
//     return {
//         description: state.expenses.description,
//         amount: state.expenses.amount,
//         createdAt: state.expenses.createdAt
//     }
// }

// export default connect(MapStateToProps)(ExpenseListItem);

// export default ExpenseListItem;

//CONNECT ALLOWS YOU TO ACCESS DISPATCH PROP

export default ExpenseListItem;
//ExpenseListItem intercepts props and passes dispatch with it