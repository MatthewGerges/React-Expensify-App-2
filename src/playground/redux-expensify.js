import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';



/*
PROCESS:
1. The store holds the state for the application.

2. When an action is dispatched, it goes to the store.

3. The store then sends that action to every single reducer.

4. The reducers that have a matching switch case are ran.

5. Whatever is returned from the reducers become the new state of the app.

That's all there is to it.
*/


//ADD_EXPENSE
//action generator

//={} allows you to destructure an empty object

const addExpense = (
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

const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

//REMOVE_EXPENSE
//EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

//SET_TEXT_FILTER
//SORT_BY_DATE

const sortByDate = () => ({
    type:'SORT_BY_DATE',
})
//SORT_BY_AMOUNT

const sortByAmount = () => ({
    type:'SORT_BY_AMOUNT',
})
//SET_START_DATE
//no need to make start date equal to undefined
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})
//SET_END_DATE

//expenses reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            //state.push(action.expense)
            //but push changes original state 
            //return state.concat(action.expense)
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id)
            //very important to destructure it as you filter/ return it
        case 'EDIT_EXPENSE':
            //state.map allows you to go through all the other items and change the one that matches
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
            })
        default: 
            return state;
    }
};

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

//FILTERS REDUCER
// const filtersReducer = (state = {filtersReducerDefaultState}, action) => {
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return{
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}
//timestamps (mseconds)
//Start - Jan 1 1970 (unix epoch)
//33400, 10, -203 (date very late in 1969)


//Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) =>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        //if type of startdate is not equal to a #, will always be true for non-numbers only if it is a number, filter expenses
        //startdate is 2 and created at is 1
        //if the above is false it will be false and will be filtered out
        //if expense 
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch
        //if any are false they will be removed from array and will not be visible expense
    //sort gets called on an array and returns an array
    }).sort((a, b) => {
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1  : -1;
            //if a.created At is not less than  b.createdAt, we will return -1 so a comes first
            //if a is not less it is -1 ad comes after?
        }
        else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
            //if a is not less than b, -1 wil be returned and a will come first since it's more exp
        }
    })
};

//combined reducers combines reducers to manage different states
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        //expenses will be managed by expensesreducer
        //puts array on expenses property
        //someOtherValue: someReducer
        filters: filtersReducer
    })
);

store.subscribe(() =>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    //console.log(store.getState())
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: -21000}));
// //add expense will get dispatched to both reducers 


const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: -1000}));

// console.log(expenseOne);

// store.dispatch(removeExpense({id: expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
// //edit expense takes 2 args - id

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// console.log(store.getState());

// store.dispatch(setStartDate(125));
// // store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));


const demoState = {
    expenses: [{
        id: 'pois',
        description: 'Jan Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

const user = {
    name: 'Jen',
    age: 24
};

console.log({
    //if age is put here, it will be overwritten by user
    ...user,
    location: 'Philly',
    age: 27
})


//no need to add it to babelrc, preset-env has ...object incorporated