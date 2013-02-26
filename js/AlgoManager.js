var MAX_SORT_ELEMENTS = 6;
var SHOW_SWT_CLICKED = "showSWTClicked";
var SWAP_SPEED = 400;
var PERCENT_BUCKMASTER_PAD = 0.30;

var bucketMaster;

function init(){
    runSort("bubbleSort");
}

function runSort(algo){

    if(bucketMaster)
        bucketMaster.removeMasterFromDom();

    bucketMaster = new BucketMaster(6, 0.3, algo);
    bucketMaster.createAndAppend();

}

$(document).ready(function(){
    init();
});
