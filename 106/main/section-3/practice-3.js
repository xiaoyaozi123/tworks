'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let result = [];
    let num = 0;

    for(let i = 0; i < collectionA.length; i++){
        num += 1;
        if(collectionA[i] !== collectionA[i + 1]){
            result.push({key: collectionA[i],count: num});
            num = 0;
        }
    }

    for(let j = 0;j < objectB.value.length; j++){
        for(let i = 0; i < result.length; i++) {
            if (objectB.value[j] === result[i].key) {
                if (result[i].count / 3 >= 1) {
                    result[i].count -= Math.floor(result[i].count / 3);
                }
            }
        }
    }

  return result;
}

