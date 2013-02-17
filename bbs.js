var MAX_SORT_ELEMENTS = 5;

var sortliststate = {
    firstClicked: false
};


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
            console.log($bucket.attr('id'));
            var $switchToolHead = $("<div class='switchToolHead'></div>");
            $switchToolHead.data('number', i);
            $switchToolHead.appendTo($bucket);
            $switchToolHead.button().click(function(event){
                $(this).toggleClass("showSWTClicked");

                if(!sortliststate.firstClicked){
                    sortliststate.firstClicked = $(this).data('number');
                } else{
                    sortliststate.firstClicked = false;
                }
                alert("cursortele: " + getSWTCurrentSortElement($(this)) + " number: " + $(this).data('number'));
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

//            sortliststate['SWTHeads'].append()
//            sortliststate['list'].append(rand);
            $(this).append($sortElement);
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
