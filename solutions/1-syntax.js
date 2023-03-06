// BEGIN (write your solution here)
export const getWeekends = (format) => {
    const long = ['saturday', 'sunday'];
    const short = ['sat', 'sun'];
    switch(format){
        case 'long':
            return long;
        case 'short':
            return short;
        default:
            return long;
    }
};
// END
