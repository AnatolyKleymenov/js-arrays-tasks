// BEGIN
export default getSameParity = (arrNumber) =>{
    const newArr =[];
    if(arrNumber.length === 0)
    {
        return arrNumber;
    }
    if(arrNumber[0] % 2 === 0)
    {
        for(let i=0;i<arrNumber.length;i++)
        {
            if(arrNumber[i] % 2 === 0)
            {
            newArr.push(arrNumber[i]);
            }
        }
    }
    else{
        for(let i=0;i<arrNumber.length;i++)
        {
            if(arrNumber[i] % 2 !== 0)
            {
            newArr.push(arrNumber[i]);
            }
        }   
    }

    return newArr;
}
// END