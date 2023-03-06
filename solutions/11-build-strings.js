// BEGIN
export default buildDefinitionList = (arr) =>{
    let str = '<dl>';
    if(arr.length === 0)
    {
        return '';
    }
    for(let i=0;i<arr.length;i++)
    {
        str += `<dt>${arr[i][0]}</dt><dd>${arr[i][1]}</dd>`
    }
    return (str + '</dl>');
}
// END