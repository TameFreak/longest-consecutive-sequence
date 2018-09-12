module.exports = function longestConsecutiveLength(array) {
  
  const HashObject = {};
  const lengthArr = array.length;
  let resCount = 0;


  for (let i = 0; i < lengthArr; i++){
    HashObject[array[i]] = array[i];
  }

  for (let i = 0; i < lengthArr; i++){

    if (HashObject[array[i] - 1] === undefined){
      let elem = array[i];

      while(HashObject[elem] !== undefined){
        elem++;
      }

      if (resCount < elem - array[i]) resCount = elem - array[i];
    }

  }

  return resCount;
}
