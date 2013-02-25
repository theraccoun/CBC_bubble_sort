var MAX_SORT_ELEMENTS = 6;
var SHOW_SWT_CLICKED = "showSWTClicked";
var SWAP_SPEED = 400;
var PERCENT_BUCKMASTER_PAD = 0.30;

var sortliststate = {
    firstClicked: null,
    secondClicked: null,
    order: new Array(),
    curIteration: -1
};

var sortElements = {};

var correctList = new Array();


function init(){
    var bucketMaster = new BucketMaster(4, 0.3, 400);
    bucketMaster.initializeBuckets();
    bucketMaster.addToDom();
//    drawInitialSortElements();
}

function drawInitialSortElements(){

    var docWidth = $(document).width();
    var widthWithPad = docWidth - PERCENT_BUCKMASTER_PAD * docWidth;
    var bucketWidth = Math.floor(widthWithPad/MAX_SORT_ELEMENTS);
    var buckMasterWidth = bucketWidth  * MAX_SORT_ELEMENTS;

    $('#bucketMaster').css('width', buckMasterWidth);
    $('#bucketMaster').css('height', bucketWidth);


    for(var i=0; i < MAX_SORT_ELEMENTS; ++i){

        var $bucket = jQuery('<div/>', {
            id: 'buck' + (i).toString(),
            class: 'bucket'
        });
        $bucket.css("width", bucketWidth);
        $bucket.css("height", "99%");

        $('#bucketMaster').append($bucket);

        console.log($bucket.attr('id'));
        var $switchToolHead = $("<div class='switchToolHead'></div>");
        $switchToolHead.data('index', i);
        $switchToolHead.appendTo($bucket);
        var height = $switchToolHead.height();
        $switchToolHead.css('top', -(height + 10));
        $switchToolHead.button().click(function(event){
            $(this).toggleClass(SHOW_SWT_CLICKED);

            var index1, index2;

            if(sortliststate.firstClicked == null){
                sortliststate.firstClicked = $(this)
            }
            else if((index1 = sortliststate.firstClicked.data('index')) != (index2 = $(this).data('index'))){
                sortliststate.secondClicked = $(this);
                sortliststate.curIteration++;

                animateSwap();
                isCorrectMove(index1, index2);
            }
            else{
                sortliststate.firstClicked = null;
            }
        });

    }

    var originalList = new Array();

    $('#bucketMaster').children('.bucket').each(function(i) {

        var rand = Math.floor(Math.random()*11);
        sortliststate.order.push(rand);
        var $sortElement = $("<div class='sortElement'><p>" + rand + "</p></div>");

        sortElements[i] = $sortElement;

        $(this).append($sortElement);

        var parentHeight = $sortElement.parent().height();
        $sortElement.css("height", (parentHeight-7).toString()  + "px");

        originalList.push(rand);
    });

    bubbleSort(originalList);
}

function isCorrectMove(index1, index2){
    var curIter = sortliststate.curIteration;

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

}

function bubbleSort(list){
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

}

function animateSwap(){

    var firstIndex = sortliststate.firstClicked.data('index');
    var secondIndex = sortliststate.secondClicked.data('index');
    var firstSort = sortElements[firstIndex];
    var secondSort = sortElements[secondIndex];

    var firstAnimateAmount = (firstSort.offset().left - secondSort.offset().left).toString();
    firstSort.animate({left:'-=' + firstAnimateAmount}, SWAP_SPEED, function(){
        sortElements[firstIndex] = secondSort;
        sortliststate.firstClicked.removeClass(SHOW_SWT_CLICKED);
        sortliststate.firstClicked = null;
    });

    secondSort.animate({left:'+=' + firstAnimateAmount}, SWAP_SPEED, function(){
        sortElements[secondIndex] = firstSort
        sortliststate.secondClicked.removeClass(SHOW_SWT_CLICKED);
        sortliststate.secondClicked = null;
    });

}

function getSWTCurrentSortElement(swt){
    return swt.parent().find('.sortElement').text();
}

function nextIteration(){
    alert("NEXT ITERATION!" + sortliststate["order"][0]);
}

$(document).ready(function(){
    init();
});
