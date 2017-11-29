'use strict';
module.exports = function collectSameElements(collectionA, collectionB) {
/*
    var array = [];
    collectionB = collectionB[0];

    for (var i = 0; i < collectionA.length; i++) {
        for (var j = 0; j < collectionB.length; j++) {
            if (collectionA[i] === collectionB[j]) {
                array.push(collectionA[i]);
            }
        }
    }

    return array;
*/
    let array = [];

    for (let i = 0; i < collectionA.length; i++) {
        for (let j = 0; j < collectionB[0].length; j++) {
            if (collectionA[i] === collectionB[0][j]) {
                array.push(collectionA[i]);
            }
        }
    }

    return array;
}
