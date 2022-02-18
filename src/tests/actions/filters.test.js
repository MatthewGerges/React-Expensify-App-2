import { setStartDate, 
        setEndDate, 
        setTextFilter, 
        sortByDate, 
        sortByAmount 
    } from "../../actions/filters";
import moment from 'moment';

test('Should generate setStartDate action object', () => {
    const action = setStartDate(moment(0));
    //0 = janruary 1 1970
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should set text filter to specified text', () => {
    const action = setTextFilter('renting')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'renting'
    })
})

test('should set text filter to default text', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should set sort by date', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should set sort by amount', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})