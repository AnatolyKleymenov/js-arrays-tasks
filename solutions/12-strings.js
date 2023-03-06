// BEGIN
export default makeCensored = (str, stopWord) =>{
    const wordArr = str.split(' ');
    for(let i=0;i<wordArr.length;i++)
    {
        for(let j=0;j<stopWord.length;j++)
        {
        if(wordArr[i] === stopWord[j]){
        wordArr[i] = '$#%!';
        }
        }
    }
    return wordArr.join(' ');

}
// END