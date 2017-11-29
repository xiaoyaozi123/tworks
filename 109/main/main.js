function sameElement(inputs) {
    var times = 0;
    var sameInput = [];
    for (var i = 0; i < inputs.length;) {
        for (var j = 0; j < inputs.length; j++) {
            if (inputs[i] === inputs[j]) {
                times++;
            }
        }

        i += times;
        sameInput.push({barcode: inputs[i - 1], count: times});
        times = 0;
    }

    return sameInput;
}

function statisticsTheSameElement(sameItem) {
    var eventuallyTheSameResult = [];

    for (var i = 0; i < sameItem.length; i++) {
        var splitItem = sameItem[i].barcode.split("-");
        if (splitItem.length === 1) {
            eventuallyTheSameResult.push({barcode: splitItem[0], count: sameItem[i].count})
        } else if (splitItem.length === 2) {
            eventuallyTheSameResult.push({barcode: splitItem[0], count: splitItem[1] * sameItem[i].count})
        }
    }

    return eventuallyTheSameResult;
}

function outputTheResult(inputs) {
    var sameItem = sameElement(inputs);
    return statisticsTheSameElement(sameItem);
}

function MergeInformation(output, allItems) {
    var outputItems = [];
    for (var i = 0; i < output.length; i++) {
        for (var j = 0; j < allItems.length; j++) {
            if (output[i].barcode === allItems[j].barcode) {
                outputItems.push(Object.assign(output[i], allItems[j]));
            }
        }
    }

    return outputItems;
}

function splicingInformation(outputItems) {
    var html_HEAD = `***<没钱赚商店>购物清单***\n`;
    var html_MIDDLE = `----------------------\n`;
    var html_TAIL = `**********************`;
    var html_item = "";
    var html_discountInformation = "挥泪赠送商品：\n";

    var allPrice = 0;
    var savePrice = 0;
    for (var i = 0; i < outputItems.length; i++) {
        var itemCount = outputItems[i].count;
        if (itemCount >= 3) {
            itemCount -= parseInt(itemCount / 3);
            html_discountInformation += `名称：${outputItems[i].name}，数量：${parseInt(outputItems[i].count / 3)}${outputItems[i].unit}\n`
        }

        let itemPrice = itemCount * outputItems[i].price;
        allPrice += itemPrice;
        savePrice += (parseInt(outputItems[i].count / 3)) * outputItems[i].price;
        html_item += `名称：${outputItems[i].name}，数量：${outputItems[i].count}${outputItems[i].unit}，单价：${parseFloat(outputItems[i].price).toFixed(2)}(元)，小计：${parseFloat(itemPrice).toFixed(2)}(元)\n`;
    }

    let html_all = `总计：${parseFloat(allPrice).toFixed(2)}(元)\n`;
    let html_save = `节省：${parseFloat(savePrice).toFixed(2)}(元)\n`;

    return html_HEAD + html_item + html_MIDDLE + html_discountInformation + html_MIDDLE + html_all + html_save + html_TAIL;
}

module.exports = function main(inputs, allItems) {

    var output = outputTheResult(inputs);

    var outputItems = MergeInformation(output, allItems);

    console.log(splicingInformation(outputItems));
};