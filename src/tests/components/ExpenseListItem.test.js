import React from 'react';
import {shallow} from 'enzyme';
//import {ExpenseListItem} from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';
//can grab default not named export

test('should render expense list item with a specific expense from expenses', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[1]} />)
    //... is the spread operator gives expenselist item access to all props - description, id, etx.
    expect(wrapper).toMatchSnapshot()
})