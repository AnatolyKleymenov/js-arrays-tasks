// BEGIN
export const get = (arr, index, strDefault = null) => {
    if(index <= (arr.length - 1) && index >=0)
    {
        return arr[index];
    }
    else{
        return strDefault;
    }
}
// END