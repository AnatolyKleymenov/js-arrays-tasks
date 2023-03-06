// BEGIN
export const swap = (arr) => {
    let temp;
    if(arr.length > 1)
    {
        temp = arr[0];
        arr[0] = arr[arr.length - 1];
        arr[arr.length - 1] = temp;
        return arr;
    }
    else{
        return arr;
    }
}
// END