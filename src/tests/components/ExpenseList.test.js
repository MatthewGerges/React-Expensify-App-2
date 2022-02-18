import React from 'react';
import {shallow} from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses = {expenses} />)
    //passing in expenses as the prop and grabbing the expenseList default export
    expect(wrapper).toMatchSnapshot();
})

test('should render Expense List with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses = {[]} />)
    expect(wrapper).toMatchSnapshot()
})