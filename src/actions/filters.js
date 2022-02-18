export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

//SET_TEXT_FILTER
//SORT_BY_DATE

export const sortByDate = () => ({
    type:'SORT_BY_DATE',
})
//SORT_BY_AMOUNT

export const sortByAmount = () => ({
    type:'SORT_BY_AMOUNT',
})
//SET_START_DATE
//no need to make start date equal to undefined
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})
//SET_END_DATE
