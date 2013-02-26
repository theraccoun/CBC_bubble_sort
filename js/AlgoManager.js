var MAX_SORT_ELEMENTS = 6;
var SHOW_SWT_CLICKED = "showSWTClicked";
var SWAP_SPEED = 400;
var PERCENT_BUCKMASTER_PAD = 0.30;

var bucketMaster;

var curSortAlgo;

function init(){
    runSort(bubbleSort);
}

function toggleActiveSideNav(curButton){
    $('.active').removeClass('active');
    $(curButton).addClass('active');
}

function setMaxSortElements(size){

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

    curSortAlgo = algo;

    if(bucketMaster)
        bucketMaster.removeMasterFromDom();

    bucketMaster = new BucketMaster(MAX_SORT_ELEMENTS, PERCENT_BUCKMASTER_PAD, algo);
    bucketMaster.createAndAppend();

}

$(document).ready(function(){
    init();
});
