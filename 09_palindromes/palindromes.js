const palindromes = function () {

    let str = arguments[0];
    str = str.replace(/[^\w\']|_/g, "");
    console.log(str);
    for(let i = 0, j=str.length-1; i<j; i++,j-- ){
        if (str[i].toLowerCase() === str[j].toLowerCase()){
            continue;
        }else{
            return false
        }
    }

    return true;

};
console.log(palindromes("A car, a man, a maraca."));
// Do not edit below this line
module.exports = palindromes;
