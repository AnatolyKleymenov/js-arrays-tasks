// BEGIN
export const flatten = (arr) =>{
    if(arr.length === 0)
    {
        return arr;
    }
    const newArr = [];
    for(let i=0;i<arr.length;i++)
    {
        if(Array.isArray(arr[i]))
        {
            let [...deepArr] = arr[i];
            for(let j = 0;j<deepArr.length;j++)
            {
                newArr.push(deepArr[j]);
            }
        }
        else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
// END