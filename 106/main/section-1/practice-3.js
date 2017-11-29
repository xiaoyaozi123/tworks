'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    let array = [];

    for (let i = 0; i < collectionA.length; i++) {
        for (let j = 0; j < objectB.value.length; j++) {
            if (collectionA[i] === objectB.value[j]) {
                array.push(collectionA[i]);
            }
        }
    }

    return array;
}
