
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
                } else{
                    return expense;
                }
            })
        default: 
            return state;
    }
};

export default expensesReducer
//or at function declaration above: export default (state = expensesReducer...)