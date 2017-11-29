'use strict';

module.exports = function countSameElements(collection) {
        let array = [];
        let count = 1;
        for (let i = 0; i < collection.length; i++) {
            if (collection[i] === collection[i + 1]) {
                count++;
            } else {
                if (collection[i].split("-").length === 1) {
                    array.push({
                        key: collection[i - 1],
                        count: count
                    });
                    count = 1;
                } else {
                    array.push({
                        key: collection[i].split("-")[0],
                        count: parseInt(collection[i].split("-")[1])
                    });
                }
            }
        }

        return array;
 /*   let result = [];

    for (let i = 0; i < collection.length; i++) {
        let elem = existKey(collection[i], result);
        if (elem) {
            elem.count++;
        } else {
            result.push({key: collection[i], count: 1});
        } else {
            array.push({
                key: collection[i].split("-")[0],
                count: parseInt(collection[i].split("-")[1])
            });
        }
    }

    return result;

};

function existKey(key, array) {
    for (let j = 0; j < array.length; j++) {
        if (array[j].key === key) {
            return array[j];
        }
    }*/
};
