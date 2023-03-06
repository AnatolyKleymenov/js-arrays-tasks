// BEGIN
export default addPrefix = (arr, prefix) =>{
    const newArr = [];
    for(let i=0;i<arr.length;i++)
    {
        newArr[i] = `${prefix} ${arr[i]}`;
    }
    return newArr;
}
// END