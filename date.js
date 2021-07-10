
let d = new Date();
let n = "AM"
let month = d.getMonth()
let hour = d.getHours();
let min = d.getMinutes();
let sec = d.getSeconds();
let date = d.getDate();
let year = d.getFullYear();
let day = d.getDay();
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
let d_and_t,lead=""
timeAndDate();
function timeAndDate() {

    if (hour == 12) {
        n = "PM";
    }
    if (hour > 12) {
        hour = hour - 12;
        n = "PM"
        // if (hour == 12) {
        //     n = "AM"
        // }
    }
    if(hour<10) lead=0;
    
}
d_and_t = `Date : ${date}-${months[month]}-${year} :: Time:${lead}${hour}:${min}${n}`;
let curr_hour= `Date : ${date}-${months[month]}-${year} :: Time:${lead}${hour}`;
exports.curr_date={
    d_and_t,
    min,
    curr_hour
};
