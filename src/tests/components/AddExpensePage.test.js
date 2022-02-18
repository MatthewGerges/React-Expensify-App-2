import React from 'react';
import {shallow} from 'enzyme'
import {AddExpensePage} from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'

let addExepnse, history, wrapper

//runs function beforeEach test case
beforeEach(() => {
    addExepnse = jest.fn();
    //jest.fin is a mock function - erases actual implementation of function
    //mock function still captures calls to function and parameters passed in 
    history = {push: jest.fn() }
    //history.push is a mock function
    wrapper = shallow(<AddExpensePage addExpense = {addExepnse} history = {history} />)
})

test('should render AddExpensePage correctly', () => {
        expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    //call it with expense object
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(addExepnse).toHaveBeenLastCalledWith(expenses[1])
})