const _ = require("lodash"); 

// BEGIN
export default getSameCount = (arr1, arr2) => {
    const newArr1 = _.uniq(arr1);
    const newArr2 = _.uniq(arr2);
    let count = 0;
    for(let i=0;i<newArr1.length;i++)
    {
        for(let j=0;j<newArr2.length;j++)
        {
            if(newArr1[i] === newArr2[j])
            {
                count++;
            }
        }
    }
    return count;
}
  // END