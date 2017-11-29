/**
 * Created by PC on 2017/11/17.
 */
function gapFilling() {

    var result = 0;



    var exampleInputEmail4 = document.getElementById("exampleInputEmail4");

    result += exampleInputEmail4.value == "统一建模语言" ? 5 : 0;



    var exampleInputEmail5 = document.getElementById("exampleInputEmail5");

    result += exampleInputEmail5.value == "封装性" ? 5 : 0;



    var exampleInputEmail6 = document.getElementById("exampleInputEmail6");

    result += exampleInputEmail6.value == "继承性" ? 5 : 0;



    var exampleInputEmail7 = document.getElementById("exampleInputEmail7");

    result += exampleInputEmail7.value == "多态性" ? 5 : 0;



    return result;

}



function choiceQuestion() {

    var result = 0;



    var umls = document.getElementsByName("inlineRadioOptions3");

    for (var i = 0; i < umls.length; i++) {

        if (umls[i].checked) {

            result += umls[i].value == 2 ? 10 : 0;

        }

    }



    var umls = document.getElementsByName("inlineRadioOptions4");

    for (var i = 0; i < umls.length; i++) {

        if (umls[i].checked) {

            result += umls[i].value == 5 ? 10 : 0;

        }

    }

    return result;

}





function multipleChoice() {

    var result = 0;



    var isA1Checked = document.getElementById("dx1").checked;

    var isA2Checked = document.getElementById("dx2").checked;

    var isA3Checked = document.getElementById("dx3").checked;

    var isA4Checked = document.getElementById("dx4").checked;

    if (!isA1Checked && !isA2Checked && !isA4Checked) {

        result += 0;

    }

    else result += 10;



    var isA5Checked = document.getElementById("dx5").checked;

    var isA6Checked = document.getElementById("dx6").checked;

    var isA7Checked = document.getElementById("dx7").checked;

    var isA8Checked = document.getElementById("dx8").checked;

    if (!isA5Checked && !isA6Checked && !isA7Checked) {

        result += 0;

    }

    else result += 10;



    return result;

}



function trueFalse() {

    var result = 0;



    var judge = document.getElementsByName("inlineRadioOptions1");

    for (var i = 0; i < judge.length; i++) {

        if (judge[i].checked) {

            result += judge[i].value == 10 ? 10 : 0;

        }

    }



    var judge = document.getElementsByName("inlineRadioOptions2");

    for (var i = 0; i < judge.length; i++) {

        if (judge[i].checked) {

            result += judge[i].value == 11 ? 10 : 0;

        }

    }

    return result;

}



function shortAnsweiQuestion() {

    var result = 0;



    var jd = document.getElementById("jd");

    result += 20;

    return result;

}



function main() {

    var gapFillingScore = gapFilling();

    var choiceQuestionScore = choiceQuestion();

    var multipleChoiceScore = multipleChoice();

    var trueFalseScore = trueFalse();

    var shortAnsweiQuestionScore = shortAnsweiQuestion();



    alert(gapFillingScore + choiceQuestionScore + multipleChoiceScore + trueFalseScore + shortAnsweiQuestionScore);

}