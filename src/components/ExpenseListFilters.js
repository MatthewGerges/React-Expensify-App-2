import React from 'react';
import {connect } from 'react-redux';
import {setTextFilter} from '../actions/filters'
import { sortByDate, sortByAmount, setEndDate, setStartDate } from '../actions/filters';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
//have direct access to dispatch inside components

//will switch to xlass based component instead of stateless functional component
//now you no longer have access to props instead props.filters.text in stateless functioncal comp
//becomes this.props.filters.text

//break out all inline functions into methids
export class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null
    }

    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused}))
    }
    onTextChange = (e) => {
        //event argument
        this.props.setTextFilter(e.target.value)
        console.log(e.target.value)
    }
    onSortChange = (e) => {
        e.target.value === "date" ? this.props.sortByDate() : this.props.sortByAmount()
    }
    render() {
        return(
            <div>
                <input type = "text" value = {this.props.filters.text} onChange = {this.onTextChange}/>
                <select value = {this.props.filters.sortBy} onChange = {this.onSortChange}>
                    <option value = "date">Date</option>
                    <option value = "amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate = {this.props.filters.startDate}
                    endDate = {this.props.filters.endDate}
                    onDatesChange = {this.onDatesChange}
                    focusedInput = {this.state.calendarFocused}
                    //change handler - gets focused value and sets it:
                    onFocusChange = {this.onFocusChange}
                    startDateId = "start"
                    endDateId = "end"
                    //clear dates with x button
                    showClearDates = {true}
                    numberOfMonths = {1}
                    isOutsideRange = {() => false}
                    //num of visible months = 
                />
            </div>
        )
}
}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

// export default ExpenseListFilters;
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
//first one takes map to state function (what we want off of store) second one takes component


/*select on change above could be onChange = {(e) => {
    if (e.target.value === 'date')
        props.dipatch(sortByDate());
    else
        props.dispatch(sortByAmount())
}} */