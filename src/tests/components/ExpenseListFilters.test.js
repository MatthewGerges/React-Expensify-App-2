import React from 'react';
import { shallow } from 'enzyme'
import {ExpenseListFilters } from '../../components/ExpenseListFilters'
//importing default export without brackets gives you connected version of component
//importing namedExport gives you unconnected version of component
import {filters, altFilters} from '../fixtures/filters'
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters
            filters = {filters}
            setTextFilter = {setTextFilter}
            sortByDate = {sortByDate}
            sortByAmount = {sortByAmount}
            setStartDate = {setStartDate}
            setEndDate = {setEndDate}
        />
    )

})

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with altFilters correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

//setProps allows us to manipulate props of a certain component

//asset something about props and check if called with correct state

//should handle text change - does it call correct prop when text changes
test('should handle text change correctly', () => {
    const value = "gas"
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})


//should sortByDate
test('should set sortByDate correctly', () => {
    const value = "date"
    wrapper.setProps({
        filters: altFilters
    })
    wrapper.find('select').simulate('change', {
        target: {value}
    })
    expect(sortByDate).toHaveBeenCalled()
})

//should sortByAmount

test('should set sortByAmount correctly', () => {
    const value = 'amount'
    wrapper.find('select').simulate('change', {
        target: {value}
    })
    expect(sortByAmount).toHaveBeenCalled()
})

//should handleDatechanges
test('should handle date changes', () => {
    const startDate = moment(0);
    const endDate = moment(0).add(3, 'days')

    // wrapper.find('DateRangePicker').simulate('onDatesChange', {
    //     startDate : {startDate}, 
    //     endDate: {endDate}
    // })
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate })    
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
    //expect(onDatesChange).toHaveBeenLastCalledWith({startDate, endDate})
    //above is wrong assert!!
})

//should assert something about state
//should handle date focus changes
test('should handle date focus changes', () => {
    const focusedInput = "changed";
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(focusedInput);
    expect(wrapper.state('calendarFocused')).toBe("changed")
})

// const wrapper = shallow(<ExpenseForm />)
//     const value = '12.222'
//     wrapper.find('input').at(1).simulate('change', {
//         target: {value}
//     })
//     expect(wrapper.state('amount')).not.toEqual(value)

// wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
//     //get one of its props - onDateChange and call it
//     expect(wrapper.state('createdAt')).toEqual(now)