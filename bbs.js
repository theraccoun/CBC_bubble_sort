var MAX_SORT_ELEMENTS = 5;

var sortliststate = {
    firstClicked: null
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
            $bucket.css("width", (100/MAX_SORT_ELEMENTS - 1).toString() + "%");
            $bucket.css("height", "98%");

            console.log($bucket.attr('id'));
            var $switchToolHead = $("<div class='switchToolHead'></div>");
            $switchToolHead.data('number', i);
            $switchToolHead.appendTo($bucket);
            $switchToolHead.button().click(function(event){
                $(this).toggleClass("showSWTClicked");

                if(sortliststate.firstClicked == null){
                    sortliststate.firstClicked = $(this)
                } else{
                    sortliststate.firstClicked.parent().find('.sortElement').css('zIndex', 1000);
                    console.log("meow: " + sortliststate.firstClicked.parent().offset().left);
                    console.log("cheese" + $(this).parent().offset().left);
                    var firstAnimateAmount = (sortliststate.firstClicked.parent().offset().left - $(this).parent().offset().left).toString();

                    console.log("firstanimateamount: " + firstAnimateAmount);
                    sortliststate.firstClicked.parent().find('.sortElement').animate({left:'-=' + firstAnimateAmount}, 500);
                    $(this).parent().find('.sortElement').animate({left:'+=' + firstAnimateAmount}, 500);
                    sortliststate.firstClicked = null;
                }
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

            var parentHeight = $sortElement.parent().height();
            console.log("ParentHeighT: " + parentHeight);
            console.log($sortElement.zIndex());
            $sortElement.css("height", parentHeight.toString()  + "px");
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
