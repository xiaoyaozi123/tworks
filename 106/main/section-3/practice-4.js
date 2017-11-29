'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {

    let res = [];

    for (let i = 0; i < collectionA.length; i++) {
        if (collectionA[i].length > 1) {
            for (let j = 0; j < parseInt(collectionA[i][2]); j++) {
                res.push(collectionA[i][0]);
            }
        }
        else {
            res.push(collectionA[i]);
        }
    }

    let result = [];
    let temp = 0;

    for (let i = 0; i < res.length; i++) {
        temp += 1;
        if (res[i] !== res[i + 1]) {
            result.push({key: res[i], count: temp});
            temp = 0;
        }
    }

    for (let j = 0; j < objectB.value.length; j++) {
        for (let i = 0; i < result.length; i++) {
            if (objectB.value[j] === result[i].key) {
                if (result[i].count / 3 >= 1) {
                    result[i].count -= Math.floor(result[i].count / 3);
                }
            }
        }
    }

    return result;
};
