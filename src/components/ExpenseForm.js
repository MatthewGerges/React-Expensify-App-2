import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


// Summary: installed moment and react date - with TimeRanges, react date picker requires 
// moment - current time created at that dumps into date picker and traks changes 
// then we customized number of months and whether days are available to be picked

// const date = new Date();
//above api is complex

const now = moment();
//moment is whenever code happens to run
// console.log(now);
//console.lgging this tells you the various methods you can use

console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component{
    constructor(props) {
        console.log(props.expense);
        super(props);
        //super refers to parent class constructor - points to react.component implementation
        //still kinda don't understand it
        this.state = {
            description: props.expense ? props.expense.description: '',
            //if props.expense exists, use props.expense.note, otherwise set it to empty string
            note: props.expense ? props.expense.note: '',
            amount: props.expense ? (props.expense.amount / 100).toString(): '',
            //convert cents to dollars to string
            createdAt: props.expense ? moment(props.expense.createdAt): moment(),
            //if it exists - create instance of moment at specific point in time not when code runs so pass timestamp in
            calendarFocused: false,
            error: ''
        }

    }
    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({description}))
    }
    onTextAreaChange = (e) => {
        const noteNew = e.target.value
        this.setState(() => ({note: noteNew}))
        //or use
        // e.persist();
        // this.setState(() => ({note: e.target.value}))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            // the ^ forces only numbers to be typed, the asterisks adds an optional include
            //inside brackets we let users type a decimal (number value) with up to 2 decimals
            //the first curly braces requires the user to type 1 to inf numbers before the decimal
            //if !amount allows users to use delete key
        this.setState(() => ({amount}))
        }
    }
    onDateChange = (createdAt) => {
        //if date cleared - still called, if! prevents user from clearing field
        if (createdAt) {
            this.setState(() =>({createdAt}))
        }
    }
    onFocusChange = ({focused }) => {
        this.setState(() => ({calendarFocused: focused}))
    }
    onSubmit = (e) => {
        e.preventDefault();
        //e.preventdefault prevents full page refresh every time something happens
        if (!this.state.description || !this.state.amount)
        {
            //set error state equal to please provide description and amount
            this.setState(() => ({error: 'Please provide both a description and an amount!!'}))
        }
        else
        {
            //clear the error
            this.setState(() => ({error:''}))
            console.log('submitted');
            this.props.onSubmit({
                //call on submit with object containing all properties
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                //converts string to floating point with base 10
                //createdAt: this.state.createdAt
                //above is not a readable timestamp 
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                        type = "text"
                        placeholder='Description'
                        autoFocus
                        value = {this.state.description}
                        onChange = {this.onDescriptionChange}
                    />
                    <input
                        type = "text"
                        placeholder = "Amount"
                        value = {this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date = {this.state.createdAt}
                        //so when user loads page - it displays exact day on which that occurs

                        onDateChange = {this.onDateChange}
                        focused = {this.state.calendarFocused}
                        onFocusChange = {this.onFocusChange}
                        numberOfMonths = {1}
                        //only one month pops up
                        isOutsideRange = {() => false}
                        //day is never outside range so we can pick days in past (no days prop passed)
                    />
                    <textarea
                        placeholder='Add a note for your expense (optional'
                        value = {this.state.note}
                        onChange={this.onTextAreaChange}
                    />
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}


//extends react.component allows us to pass props to a user defined class without constructor