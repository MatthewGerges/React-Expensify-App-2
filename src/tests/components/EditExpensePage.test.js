import React from 'react';
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses'
import { EditExpensePage } from '../../components/EditExpensePage';

let editExpense, history, wrapper, removeExpense

//runs function beforeEach test case
beforeEach(() => {
    //spies:
    editExpense = jest.fn();
    removeExpense = jest.fn();
    //jest.fin is a mock function - erases actual implementation of function
    //mock function still captures calls to function and parameters passed in 
    history = {push: jest.fn() }
    //history.push is a mock function
    wrapper = shallow(<EditExpensePage 
        editExpense = {editExpense} 
        removeExpense = {removeExpense}
        history = {history} 
        expense = {expenses[1]}        
    />)
})

test('should render EditExpense Page correctly', () => {
        expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense correctly', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    //call it with expense object
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1])
})

test('should handle removeExpense correctly', () => {
    wrapper.find('button').prop('onClick')()
    //called with no arguments
    //or
    //wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[1].id})
})

// test('should handle removeExpense correctly', () => {
// })
