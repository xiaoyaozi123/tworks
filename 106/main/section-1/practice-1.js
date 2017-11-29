'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  let array =[];
  for(let i = 0;i<collectionA.length;i++){
    for(let j = 0;j<collectionB.length;j++){
      if(collectionA[i] === collectionB[j]){
        array.push(collectionA[i]);
      }
    }
  }
  return array;
}


