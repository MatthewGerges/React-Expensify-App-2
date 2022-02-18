import React from 'react';
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses'

//making a stateless functional component into a class based one to avoid inline functions
export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
            <h1>Add Expense</h1>
            <ExpenseForm 
                onSubmit = {this.onSubmit}
            />
        </div>
        )
    }
}
/*
const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit = {(expense) => {
                //props.dispatch(addExpense(expense))
                //mapDispatchtoprops similifies this line
                props.onSubmit(expense)
                props.history.push('/')
                //console.log(expense)
                //push switches you over to '/' dashboard without reloading entire page
            }}
        />
    </div>
)
*/

const mapDispatchToProps = (dispatch) => ({
        addExpense: (expense) => dispatch(addExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
//connect connects addexpensepage to store - passed in as props but still need to import action to use props.dispatch
//undefined because no mapStateToProps exists