// BEGIN
const _ = require("lodash");
export default countUniqChars = (str) => {
    if(str === '')
    {
        return 0;
    }
    const arr = str.split('');
    const newArr = _.uniq(arr);
    return newArr.length;
}
// END