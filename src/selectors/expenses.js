import moment from "moment";

//Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) =>{
        // const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        //if type of startdate is not equal to a #, will always be true for non-numbers only if it is a number, filter expenses
        //startdate is 2 and created at is 1
        //if the above is false it will be false and will be filtered out
        //if expense 
        // const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const createedAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createedAtMoment, 'day') : true
        const endDateMatch = endDate ? endDate.isSameOrAfter(createedAtMoment, 'day'): true;
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


export default getVisibleExpenses;

//returns filtered and sorted array