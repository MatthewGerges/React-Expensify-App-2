import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';


export default () => {
    //combined reducers combines reducers to manage different states
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            //expenses will be managed by expensesreducer
            //puts array on expenses property
            //someOtherValue: someReducer
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}

