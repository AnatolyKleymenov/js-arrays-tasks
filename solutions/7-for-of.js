// BEGIN
export default calculateAverage = (arr) =>{
    let sum = 0;
    if(arr.length === 0)
    {
        return null;
    }
    for(let temp of arr)
    {
        sum += temp;
    }
    return (sum / arr.length);
}
// END