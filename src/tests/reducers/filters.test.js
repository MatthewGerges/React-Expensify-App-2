import moment from 'moment';
import filtersReducer from '../../reducers/filters';

//we will test defaults usy @@init to check if reducer sets itself up correctly (only in redux)

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
        //we initially set it to amount so action dispatch actually makes a change
    }
    const action = {type: 'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})


//Should set text filter
// test('should set textFilter', () => {
//     const currentState = {
//         text: 'gas bill',
//         startDate: undefined,
//         endDate: undefined,
//         sortBy: 'undefined'
//     }
//     const action = {type: "SET_TEXT_FILTER"}
//     const state = filtersReducer(currentState, action)
//     expect(state.text).toBe('gas bill')
// })

//should 

// test('should set startDate filter', () => {
//     // const currentState = {
//     //     text: 'gas bill',
//     //     startDate: undefined,
//     //     endDate: undefined,
//     //     sortBy: 'undefined'
//     // }
//     // const action = {type: "SET_TEXT_FILTER"}
//     // const state = filtersReducer(currentState, action)
//     const text = 'gas bill'
//     const action = {
//         type: 'SET_TEXT_FILTER',
//         text
//     }
//     // const state = filtersReducer(undefined, {type: "SET_TEXT_FILTER", text: 'gas bill'})
//     const state = filtersReducer(undefined, action)
//     expect(state.text).toBe(text)
// })


test('should set text filter', () => {
    const text = 'This is my filter';
    const action = {
      type: 'SET_TEXT_FILTER',
      text: 'gas bill'
    };
    const state = filtersReducer(undefined, {type: "SET_TEXT_FILTER", text:'gas bill'});
    //or
    //const state = filtersReducer(undefined, action);
    expect(state.text).toBe('gas bill');
  });


  test('should set startDate filter', () => {
      const state = filtersReducer(undefined, {type: "SET_START_DATE", startDate: moment(0)})
      expect(state.startDate).toStrictEqual(moment(0))
  })

  test('should set EndDate filter', () => {
    const state = filtersReducer(undefined, {type: "SET_END_DATE", endDate: moment(0)})
    expect(state.endDate).toEqual(moment(0))
})  


//TO EQUAL VS TO BE - DIFFERENCE?
//to equal for objects?
//Can create test case like so:

// test('should set endDate filter', () => {
//     const endDate = moment();
//     const action = {
//       type: 'SET_END_DATE',
//       endDate
//     };
//     const state = filtersReducer(undefined, action);
//     expect(state.endDate).toEqual(endDate);
//   });
  