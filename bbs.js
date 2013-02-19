var MAX_SORT_ELEMENTS = 5;
var SHOW_SWT_CLICKED = "showSWTClicked";
var SWAP_SPEED = 400;

var sortliststate = {
    firstClicked: null,
    secondClicked: null
};

var sortElements = {}


function init(){
    drawInitialSortElements();
}

function drawInitialSortElements(){
    sortliststate.order = new Array();


        for(var i=0; i < MAX_SORT_ELEMENTS; ++i){

            var $bucket = jQuery('<div/>', {
                id: 'buck' + (i).toString(),
                class: 'bucket'
            });
            $bucket.css("width", (100/MAX_SORT_ELEMENTS - 1).toString() + "%");
            $bucket.css("height", "98%");

            console.log($bucket.attr('id'));
            var $switchToolHead = $("<div class='switchToolHead'></div>");
            $switchToolHead.data('number', i);
            $switchToolHead.appendTo($bucket);
            $switchToolHead.button().click(function(event){
                $(this).toggleClass(SHOW_SWT_CLICKED);

                if(sortliststate.firstClicked == null){
                    sortliststate.firstClicked = $(this)
                }
                else if(sortliststate.firstClicked.data('number') != $(this).data('number')){
                    sortliststate.secondClicked = $(this);
                    animateSwap();
                }
                else{
                    sortliststate.firstClicked = null;
                    alert("WORD!");
                }
            });

            $('#bucketMaster').append($bucket);
        }

        $('#bucketMaster').children('.bucket').each(function(i) {

            var rand = Math.floor(Math.random()*11);
            sortliststate.order.push(rand);
            var $sortElement = $("<div class='sortElement'>" + rand + "</div>");

            sortElements[i] = $sortElement;

            $sortElement.draggable({
                containment: '#bucketMaster'
            });
            $(this).append($sortElement);

            var parentHeight = $sortElement.parent().height();
            $sortElement.css("height", parentHeight.toString()  + "px");
        });
}

function animateSwap(){

    var firstIndex = sortliststate.firstClicked.data('number');
    var secondIndex = sortliststate.secondClicked.data('number');
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
