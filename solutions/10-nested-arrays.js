// BEGIN
export default getSuperSeriesWinner = (arr) =>{
    let countUSSR = 0;
    let countCanada = 0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i][0] > arr[i][1])
        {
            countCanada++;
        }
        else if(arr[i][0] < arr[i][1]){
            countUSSR++;
        }
    }
    if(countCanada > countUSSR)
    {
        return 'canada';
    }
    else if(countCanada === countUSSR)
    {
        return null;
    }
    else{
        return 'ussr';
    }
}
// END