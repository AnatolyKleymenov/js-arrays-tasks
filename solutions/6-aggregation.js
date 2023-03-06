// BEGIN
export const calculateSum = (arr) => {
    let sumArr = 0;
    if(arr.length === 0){
        return 0;
    }
    for(let i = 0;i < arr.length;i++)
    {
        if(arr[i] % 3 === 0)
        {
            sumArr += arr[i];
        }
    }
    return sumArr;
}
// END