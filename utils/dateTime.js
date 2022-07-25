
export default function dateRange(){
    var curr = new Date; // get current date
    var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    var last = first + 6; // last day is the first day + 6

    // var firstday = new Date(curr.setDate(first));
    var lastday = new Date(curr.setDate(last));
    return {"firstday": first, "lastday":lastday}
}

// e0b89caa29e449b49d0d56fc7ccd3874 