
var MergeSort = {
    isCorrectMove: function(correctList, curIter, index1, index2){

        var isIndex1Correct = (correctList[curIter][0] == index1 || correctList[curIter][0] == index2);
        var isIndex2Correct = (correctList[curIter][1] == index1 || correctList[curIter][1] == index2);

        var isRight = isIndex1Correct && isIndex2Correct;

        if(!isRight){
            alert("WOW TERRIBLE YOU SUCK BAD JOB!");
        }
        else if(isRight && curIter == correctList.length -1){
            alert("YOU WON GOOD JOB YOU KNOW BUBBLE SORT CONGRATS!");
        }


        return isIndex1Correct && isIndex2Correct;
    },

    sort: function(correctList, list){

    }
}
