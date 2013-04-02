var bubbleSort = {
    isCorrectMove: function(correctList, curIter, index1, index2){

        var isIndex1Correct = (correctList[curIter][0] == index1 || correctList[curIter][0] == index2);
        var isIndex2Correct = (correctList[curIter][1] == index1 || correctList[curIter][1] == index2);

        var isRight = isIndex1Correct && isIndex2Correct;

        if(!isRight){
            alert("Not quite...try again!");
        }
        else if(isRight && curIter == correctList.length -1){
            alert("Good work...you know BubbleSort!");
        }


        return isIndex1Correct && isIndex2Correct;
    },

    sort: function(correctList, list){
        var swapped = true;

        while(swapped){
            swapped = false;
            for(var i=0; i < list.length - 1; ++i){

                if(list[i] > list[i+1]){
                    var temp = list[i];
                    list[i] = list[i+1];
                    list[i+1] = temp;

                    correctList.push([i, i+1]);
                    swapped = true;
                }
            }
        }

        for(var j=0; j<correctList.length; ++j){
            console.log(correctList[j]);
        }
    },

    displayInfo: function(){
        var $bbsInfo = "<div class='well span7' id='algo-info'> <h3> Think you know Bubble sort?</h3>"
        + "<p> Click the green buttons to swap any two sort elements.</p>"
        + "<p> If you match the exact iterative process of a standard bubble sort algorithm, you win!</p></div>";
        $('.playElements').append($bbsInfo); 
        $('.playElements').append($arraySize); 
    }
}
