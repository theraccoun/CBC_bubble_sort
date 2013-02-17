var MAX_SORT_ELEMENTS = 5;

var sortliststate = {};


function init(){
    drawInitialSortElements();
}

function drawInitialSortElements(){
    sortliststate.order = new Array();


        for(var i=0; i < MAX_SORT_ELEMENTS; ++i){
            var $bucket = jQuery('<div/>', {
                id: i,
                class: 'bucket'
            });
            var $switchToolHead = $("<div class='switchToolHead'></div>");
            $switchToolHead.appendTo($bucket);
            alert($switchToolHead.parent().attr('id'));
            $switchToolHead.button().click(function(event){
                $(this).toggleClass("showSWTClicked");
            });
            $('#bucketMaster').append($bucket);
        }

        $('#bucketMaster').children('.bucket').each(function(i) {

            var rand = Math.floor(Math.random()*11);
            sortliststate.order.push(rand);
            var $sortElement = $("<div class='sortElement'>" + rand + "</div>");


            $sortElement.draggable({
                containment: '#bucketMaster'
            });

            $(this).append($sortElement);
        });
}

function nextIteration(){
    alert("NEXT ITERATION!" + sortliststate["order"][0]);
}

$(document).ready(function(){
    init();
});
