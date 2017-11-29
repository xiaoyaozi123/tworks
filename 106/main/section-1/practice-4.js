'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    /*let result = [];
    let collectionB = objectB.value;
    for (let i = 0; i < collectionA.length; i++) {
        for (let j = 0; j < collectionB.length; j++) {
            if (collectionA[i].key === collectionB[j]) {
                result.push(collectionB[j]);
            }
        }
    }

    return result;*/
    let array = [];

    for (let i = 0; i < collectionA.length; i++) {
        for (let j = 0; j < objectB.value.length; j++) {
            if (collectionA[i].key === objectB.value[j]) {
                array.push(collectionA[i].key);

            }
        }
    }

    return array;

};
