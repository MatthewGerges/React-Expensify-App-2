import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div>
    {
        props.expenses.length === 0 ? (
            <p>No Expenses</p>
        ): (
            props.expenses.map((expense) => {
                return <ExpenseListItem key = {expense.id} {...expense} />
                    //         return <ExpenseListItem key = {expense.id} {...expense}/>
    //         //...expense allows expenseListItem to access props of description, amt and so on
    //         //uses the spread operator to list properties of expense
            }
        )
        )
    }
    
    </div>
)
// {props.filters.text}
//         <br/>
//         {props.expenses.length}
//const ConnectedExpenseList = connect((state) => {

const mapStateToProps = (state) => {
    return{
        //expenses: state.expenses,
        //filters: state.filters
        expenses: selectExpenses(state.expenses, state.filters)
        //text filter of rent is set in app.js and changes state of store
        //store and filters are passed into getVisibleExpenses
        //state of store doesnt change by getVisibleState
        //selectExpenses applies expenses and filters to the expenses 
    };
}

export default connect(mapStateToProps)(ExpenseList);
//name can be sent as a prop to expenseList
//we don't get HOC back but we get function so we need to call the function with the component
//function gets called with component
//function defines what info from store we want our component to access

//export default ConnectedExpenseList;

//cuz it's connected to the store - that's why it has access to state?