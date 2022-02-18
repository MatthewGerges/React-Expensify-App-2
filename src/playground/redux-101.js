// import {createStore} from 'redux';

// //Action generators - functions that return action objects

// //always set up default object

// // const add = (data) => {
// //     return data.a + data.b
// // }


// //OR

// const add = ({a, b}, c) => {
//     return a + b + c
// };

// console.log(add({a: 1, b: 12}, 100));
// //const incrementCount = (payload = {incrementBy}) => ({


// //={} tells you to destructure it
// //when you try to destructure empty object you take default as 1
// const incrementCount = ({incrementBy = 1}  = {}) => ({
//     type: 'INCREMENT',
//     // incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
//     // incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
//     //incrementBy: incrementBy
//     //or 
//     incrementBy
// });

// const decrementCount = ({decrementBy = 1} = {}) => ({
//     type: 'DECREMENT',
//     decrementBy: decrementBy
// });


// // no need for default values for count
// const setCount = ({countCool = 0} = {}) => ({
//     type: 'SET',
//     countCool
// })

// // const setCount = ({ countCool }) => ({
// //     type: 'SET',
// //     countCool
// // })

// // const ResetCount = ({} = {}) => ({
// //     type:'RESET'
// // })

// const ResetCount = () => ({
//     type: 'RESET'
// })

// //manually generating action from store.dispatch - you get a type without error but action generators give us errors and autocomplete

// const store = createStore((state = {count: 0}, action) => {

//     switch(action.type){
//         case 'INCREMENT':
//             //using turnary operator to decide whether default val
//             //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy: 1;
//             return {
//                 //count: state.count + incrementBy
//                 count: state.count + action.incrementBy
//                 //if no val is provided, increments by 1
//             };
//         case 'DECREMENT':
//             //const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy: 1;
//             return{
//                 count: state.count - action.decrementBy
//             };
//         case 'RESET':
//             return{
//                 //count: state.count = 0
//                 //the above works but below is better
//                 count: 0
//             };

//         case 'SET':
//             return{
//                 count: action.countCool
//             };
//         default:
//             return state;
//     }
// });

// //everytime store changes the following function gets run
// //instead of setting up a bunch of console.logs
// store.subscribe(() => {
//     console.log(store.getState());
// });

// //store tracks changing data 
// //createStore must take function that calls function right away
// //function gets called - no state value the first time - so default in parentheses gets used
// //(it is default state function)
// //
// /*      console.log(store.getState());    */
// //
// //getState returns current object

// //How to increment the count by 1 or reset it to 0?
// //Actions = object that gets sent to the store

// //define object, object type
// //dispatch allows us to send calls to store


// //store.dispatch(
// // {
// //     type: 'INCREMENT',
// //     incrementBy: 5
// // });

// // store.dispatch(
// // {
// //     type: 'INCREMENT'
// // });

// store.dispatch(incrementCount());

// //RESET
// // store.dispatch(
// //     {
// //         type: 'RESET'
// //     }
// // );

// store.dispatch(setCount({countCool: 1400}));

// store.dispatch(ResetCount());

// store.dispatch(incrementCount());
// store.dispatch(setCount());
// // store.dispatch(
// //     {
// //         type: 'DECREMENT'
// //     }
// // );

// store.dispatch(decrementCount());
// store.dispatch(decrementCount({decrementBy: 10}));

// //unsubscribe();
// //you unsubscribe from changes so the next dispatch call does not run subscribe function

// // store.dispatch(
// //     {
// //         type: 'DECREMENT',
// //         decrementBy: 5
// //     }
// // );

// // store.dispatch(incrementCount({ incrementBy: 5}))

// // store.dispatch(
// //     {
// //         type: 'SET',
// //         countCool: 101
// //     }
// // )



// //INSIDE OF CONST STORE USED TO BE:


// // if (action.type === 'INCREMENT')
// //     {
// //         return{
// //             count: state.count + 1
// //         };
// //     }
// //     else
// //     {
// //         return state;
// //     }

import { createStore } from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

//REDUCERS
//1. Reducers are pure functions - output is only determined by input
//2. Never change state or function - just reads off - doesn't change state or action
//determined only by state and action - doesnt change or touch stuff outside of scope unlike
//we don't want global variables
//All it does is just use action to return new state
let a = 10;
const add = (b) => {
    return a + b;
}

//VS. (pute funcyion unless you set let result outside of funcyion)
const add2 = (a, b) => {
    result = a + b
}

//state defaults to 0 when not set
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          count: state.count + action.incrementBy
        };
      case 'DECREMENT':
        return {
          count: state.count - action.decrementBy
        };
      case 'SET':
        return {
          count: action.count
          //action.countCool countCool is the parameter passed in
        };
      case 'RESET':
        return {
          count: 0
        };
      default:
        return state;
    }
  };

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: -100 }));
