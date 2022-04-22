function capitalize(word){
    if (typeof word != "string"){
        return "It is not a number";
    }
    let resultStr = word.charAt(0).toUpperCase() + word.substring(1,word.length).toLowerCase();
    return resultStr;
}

console.log(capitalize("HeLLO"));