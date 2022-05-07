const findTheOldest = function(array) {
  
  let oldest = "";
  let lived = 0;
  for(let i = 0; i<array.length; i++){
    
    let currentAge = 0;
    if (!array[i].yearOfDeath){
      currentAge = (new Date()).getFullYear() - array[i].yearOfBirth;
    }else{
      currentAge = array[i].yearOfDeath - array[i].yearOfBirth;
    }

    if(currentAge > lived){
      lived = currentAge;
      oldest = array[i];
    }
  }

  return oldest;
};


// Do not edit below this line
module.exports = findTheOldest;
