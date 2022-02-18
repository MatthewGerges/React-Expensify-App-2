//import moment from "moment"

//mock version

const moment = jest.requireActual('moment')
//uses actual point in time if none was added
export default (timestamp = 0) => {
    //asking for current point in time in test.js so it does not throw a snapshot error
    return moment(timestamp)
}

//HOW DOES IT KNOW WHICH FILES TO BE LINKED WITH???
//name of file is moment.js!, changing it to moment2 gives an error