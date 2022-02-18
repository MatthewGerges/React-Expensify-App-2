import uuid from 'uuid'

//ADD_EXPENSE
//action generator

//={} allows you to destructure an empty object

export const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0
    } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        //called to generate random id
        description,
        note,
        amount,
        createdAt
    }
})

export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

//REMOVE_EXPENSE
//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})