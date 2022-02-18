import React from 'react'
import {shallow} from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses';
import moment from 'moment';


test('should render Expense Form correctly', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    //if you rerun this, date is different and snapshot error fails
})

test('should render ExpenseForm with expense data', () => {
    //const wrapper = shallow(<ExpenseForm {...expenses[0]}/>)
    //OR HOW ANDREW DID IT:
    const wrapper = shallow(<ExpenseForm expense = {expenses[1]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    //putting snapshots in two places checks if both snapshots match before and after
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
        //setting preventDefault to an empty arrow function to prevent error
    })
    //cannot read prevent default - undefined (constat refreshing)
    //simulate events
    //expect state to be:
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
    //makes sure after error state changes, it gets rendered
})

test('should set description on input change', () => {
    const wrapper = shallow(<ExpenseForm />)
    const value = 'New description'
    //submit onchange event - 1. access element first using wrapper.find
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
        //e.target.value being accessed in form
    })
    //bracket in at allows you to access index of input
    //simulate takes string for first argument and obj for second
    expect(wrapper.state('description')).toBe(value)
})

test('should set note on textarea change', () => {
    const wrapper = shallow(<ExpenseForm />)
    const value = 'Note'
    wrapper.find('textarea').at(0).simulate('change', {
        //no need for .at(0) there's only 1 input, description was the first input that's why it was first index
        target: {value}
        //pass in event name and event object
        //access state of component using .state
        //access parts of inputs using indexes
    })
    expect(wrapper.state('note')).toBe(value)
})

test('should set amount if valid input', () => {
    const wrapper = shallow(<ExpenseForm />)
    const value = '23.50'
    //NOT 23.50 BUT '23.50'
    //Amount is a string!!!
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('amount')).toBe(value)
})

test('should not set amount if invalid input', () => {
    const wrapper = shallow(<ExpenseForm />)
    const value = '12.222'
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('amount')).not.toEqual(value)
})

//Test Spies
//1. render expense form with valid data - fixtures
//2. simulate submission 
//3. make sure state was cleared
//4. make sure on submit prop was called with correct object -> correct format data
//this.props.onSubmit(...), how to deal with...

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense = {expenses[0]} onSubmit = {onSubmitSpy} />)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })

    expect(wrapper.state('error')).toBe('')
    // expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[0])
    //Can't do above because you don't have id on onsubmit props
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    })

    // onSubmitSpy()
    // expect(onSubmitSpy).toHaveBeenCalled()
    // onSubmitSpy('Andrew', 'Philly')
    // expect(onSubmitSpy).toHaveBeenCalledWith('Andrew', 'Philly')
    //if mock function is not called -> prints error
})

//OnDateChange

test('should set new date on date change', () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm />)
    //no data needed to be passed down
    // wrapper.find('SingleDatePicker').prop('onDateChange')(moment())
    //or
    // wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
    //get one of its props - onDateChange and call it
    expect(wrapper.state('createdAt')).toEqual(now)
})

test('onFocusChange should change calendarFocused to true', () => {
    const focused = true
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused})
    //NEED TO PASS OBJECT SO YOU PASS FOCUS VAR IN CURLY BRACES!!
    expect(wrapper.state('calendarFocused')).toBe(focused)
})

//spies = mocked functions - can pass function into a component and when passed in it was called with some specific data
//accessing props off of children and having them rendered