import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'


//check defaultState

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
    //no sort by so comes in order
})

test('should not remove expenses if id is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '4'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
    //no sort by so comes in order
})

//should add an expense
test('should add an expense object to the expense array', () => {
    const expenseAdded = {
        id: '4',
        description: 'Tobacco',
        note: '',
        amount: 2098,
        createdAt: 1000
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense: expenseAdded
        //Can't use shorthand syntaxt if expenseAdded is not the name of expense in expenses Reducer!!
    }
    const state = expensesReducer(expenses, action)
    // expect(state).toEqual(expenses, expenseAdded)
    // expect(state).toEqual([expenses[0], expenses[1], expenses[2], expenseAdded])
    expect(state).toEqual([...expenses, expenseAdded])

})

test('should edit expense with id provided', () => {
    const ExpenseOneEdit = {
        id: expenses[1].id,
        description: expenses[1].description,
        note: expenses[1].note,
        amount: 2500,
        createdAt: expenses[1].createdAt
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        //!!!!!!!!, must pass and updates object!
        updates : {
            amount: 2500
        }
        // expense: ExpenseOneEdit
    }
    const state = expensesReducer(expenses, action)
    // expect(expenses[1]).toEqual(ExpenseOneEdit)
    // expect(state[1]).toEqual(ExpenseOneEdit)
    //expect(state).toEqual([expenses[0], ExpenseOneEdit, expenses[2]])
    expect(state[1].amount).toEqual(2500)
})

//should edit expense

//should not edit expense if expense not found
test('should not edit expense if expense not found', () => {
    const amount = 234000
    const action = {
    type: 'EDIT_EXPENSE',
    id: 3400,
    updates: {
        amount
    }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)

})


// test('should add an expense', () => {
//     const expense = {
//       id: '109',
//       description: 'Laptop',
//       note: '',
//       createdAt: 20000,
//       amount: 29500
//     };
//     const action = {
//       type: 'ADD_EXPENSE',
//       expense
//     };
//     const state = expensesReducer(expenses, action);
//     expect(state).toEqual([...expenses, expense]);
//   });