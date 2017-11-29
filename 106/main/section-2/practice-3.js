'use strict';

module.exports = function countSameElements(collection) {
    let result = [];

    for (let i = 0; i < collection.length; i++) {
        if (collection[i].length > 1) {
            if (collection[i].length === 5) {
                for (let a = 0; a < parseInt(collection[i][2] + collection[i][3]); a++) {
                    result.push(collection[i][0])
                }
            } else {
                for (let a = 0; a < parseInt(collection[i][2]); a++) {
                    result.push(collection[i][0])
                }
            }
        } else {
            result.push(collection[i])
        }
    }

    let result2 = [];
    let item = 0;
    for (let k = 0; k < result.length; k++) {
        item += 1;
        if (result[k] !== result[k + 1] || result[k] === result.length) {
            result2.push({name: result[k], summary: item});
            item = 0;
        }
    }

    return result2;
};

