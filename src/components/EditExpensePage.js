import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { useParams } from "react-router-dom";
import { editExpense } from '../actions/expenses';
import { removeExpense } from '../actions/expenses';

// const EditExpensePage = (props) => {
//     //const {id} = useParams();
//     //const selectedExpense = props.expenses.find((expense) => expense.id === id)
//     //console.log(selectedExpense)
//     //console.log(props);
//     return(
//         <div>
//         <ExpenseForm
//         expense = {props.expense}
//             onSubmit = {(expense) => {
//                 console.log('updated', expense)
//                 props.dispatch(editExpense(props.expense.id, expense));
//                 props.history.push('/');
//             }}
//         />
//         <button onClick = {() =>{
//             props.dispatch(removeExpense({id: props.expense.id}))
//             //id is an object so you have to set id to id in curly braces!!!
//             props.history.push('/');
//         }}>Remove</button>
//         </div>
//     )
// }

//Refactor EditExpensePage to be a class based component
//setup mapDispatchToProps editExpense and removeExpense

//should renderEditExpensePage - snapshot

//should handle editExpense - spies

//should handle removeExpense - spies

export class EditExpensePage extends React.Component {
    
    onSubmit = (expense) => {
        //expense = this.props.expense
        console.log('updated', expense)
        this.props.editExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }

    onClick = () => {
        this.props.removeExpense({id: this.props.expense.id})
        this.props.history.push('/')
    }
    
    render() {
        return (
            <div>
            <ExpenseForm
            expense = {this.props.expense}
            onSubmit = {this.onSubmit}
            />
            <button onClick = {this.onClick}>Remove</button>
            </div>
        )
    }
}
//was in div: Editing the expense with id of {props.match.params.id}

const mapStateToProps = (state, props) => {
    return{
        //expenses: state.expenses
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
            //iff it matches do we want to return 
        }
        //find allows us to search through array and look for single item
        //returns true if we find it
    }
//we have access to state and props from connect

// WHY DO WE NEED to do THIS and map dispatchtoprops???
//why pass down props?
const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
//we want to render state so we use connect

//props passed by reactrouter - history (goBack, go Forward - manipulate where user goes/ is redicrected)
//match(contains info on why url was match)
//location
//query = rent & sort = date, pops up onder search in location
// /edit/ 99 - 99 part should be dnamic