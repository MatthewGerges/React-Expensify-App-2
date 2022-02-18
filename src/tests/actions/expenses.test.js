import {addExpense, editExpense, removeExpense} from '../../actions/expenses'

test('Should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

//can't check if objexts or arrays are equal to each other with ===
const note = 'new note value'
test('Should setup EditExpense action object', () => {
    const action = editExpense( '123456iop', {note: 'new note value'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123456iop',
        updates: {
            note: 'new note value'
        }
        //updates is associated with the expense object
        //because it is an object MUST BE WRAPPED WITH BRACKETS!
    })
})

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense : {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should setup add expense action obj with default values', () => {
    const expenseData = {
        description: '', 
        note: '', 
        amount: 0, 
        createdAt: 0
    }
    const action = addExpense()
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        // expense:
        // {
        //     ...expenseData,
        //     id: expect.any(String)
        // }
        /* OR!!! */
        expense: {
            id: expect.any(String),
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0   
        }
    
    })
})

//can't type id because it changes each time so we can expect the id to be a type(string)