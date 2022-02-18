import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
//connect connects your component to the redux store

const ExpenseDashboardPage = () => (
    <div>
    <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage;