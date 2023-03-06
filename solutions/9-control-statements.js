// BEGIN
export default getTotalAmount = (arr, nameMoney) => {
  let sum = 0;
    for(let value of arr)
    {
        if(value.slice(0, 3) === nameMoney)
        {
           sum += Number(value.slice(4));
        }
    }
    return sum;
}
// END