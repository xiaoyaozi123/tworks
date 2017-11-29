'use strict';

module.exports = function countSameElements(collectionA, objectB) {
    for(let i = 0;i < collectionA.length;i++){
        for(let j = 0; j < objectB.value.length; j++){
            if(collectionA[i].key === objectB.value[j]){
                if(collectionA[i].count / 3 >= 1){
                    collectionA[i].count -= Math.floor(collectionA[i].count / 3);
                }
            }
        }

    }
    return collectionA;
}