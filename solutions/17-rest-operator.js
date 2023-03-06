import { first } from "lodash";

// BEGIN
export const getMax = (arr) => {
    if(arr.length === 0)
    {
        return null;
    }
    let [firstN, ...arrCopy] = arr;
    for(let item of arrCopy)
    {
        if(item > firstN)
        {
           firstN = item;
        }
    }
    return firstN;
}
// END