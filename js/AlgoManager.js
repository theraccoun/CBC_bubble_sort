var MAX_SORT_ELEMENTS = 6;
var SHOW_SWT_CLICKED = "showSWTClicked";
var SWAP_SPEED = 400;
var PERCENT_BUCKMASTER_PAD = 0.30;

var bucketMaster;

var curSortAlgo;

function init(){
    runSort(bubbleSort);
}



function setMaxSortElements(size, curSortAlgo){

    switch(size)
    {
        case "Big":
            MAX_SORT_ELEMENTS = 8;
            break;
        case "Medium":
            MAX_SORT_ELEMENTS = 6;
            break;
        case "Small":
            MAX_SORT_ELEMENTS = 4;
            break;
        default:
            alert("DEFAULT");
    }

    runSort(curSortAlgo);
}

function runSort(algo){

    $('.playElements').remove();

    addPlayDiv();
    algo.displayInfo();

    bucketMaster = new BucketMaster(MAX_SORT_ELEMENTS, PERCENT_BUCKMASTER_PAD, algo);
    bucketMaster.createAndAppend();

}

function commingSoon() {

    $('.playElements').remove();

    var $algo_info = $("<h3 class='well span7'>Coming Soon! </h3>");
    addPlayDiv();
    $('.playElements').append($algo_info);   
}

function addPlayDiv(){
    var $playElements = $("<div class='row-fluid removable playElements'></div>");
    $('body').append($playElements);
}

$(document).ready(function(){
    init();
});
