var MAX_SORT_ELEMENTS = 5;

var isStartDragging = false;

var startMouseX;
var startMouseY;

var elementDragX;
var elementDragY;
var elementDragZ0;

var dragElement;


function init(){
    drawInitialSortElements();

    document.onmousedown = OnMouseDown;
    document.onmouseup = OnMouseUp;
}

function OnMouseDown(e){

    // Handle IE case for event
    if (e == null)
        e = window.event;

    var target = e.target != null ? e.target : e.srcElement;

    if(target.className == 'sortElement'){

        isStartDragging = true;

        startMouseX = e.clientX;
        startMouseY = e.clientY;

        elementDragX = ExtractNumber(target.style.left);
        elementDragY = ExtractNumber(target.style.top);

//        console.log("first X: " + elementDragX);
//        console.log("first Y: " + elementDragY);

        dragElement = target;

        elementDragZ0 = target.style.zIndex;
        target.style.zIndex = 1000;

        document.onmousemove = MouseDrag;

        document.body.focus();

        return false;
    }
}

function MouseDrag(e){

    if (e == null)
        var e = window.event;

    dragElement.style.left = (elementDragX + e.clientX - startMouseX) + 'px';
    dragElement.style.top = (elementDragY + e.clientY - startMouseY) + 'px';

    console.log("elemetnDragX: " + elementDragX);
    console.log("new clientX: " + e.clientX);
    console.log("startMouseX: " + startMouseX);
    console.log(dragElement.style.left);
}

function OnMouseUp(e){
    if (dragElement != null)
    {
        dragElement.style.zIndex = elementDragZ0;

        // we're done with these events until the next OnMouseDown
        document.onmousemove = null;
        document.onselectstart = null;
        dragElement.ondragstart = null;

        // this is how we know we're not dragging
        dragElement = null;
    }
}

function drawInitialSortElements(){
    $('#bucketMaster').children('div').each(function(i) {
        var rand = Math.floor(Math.random()*11);
        var $sortElement = $("<div class='sortElement'>" + rand + "</div>");

        $(this).append($sortElement);
    });
}

function ExtractNumber(value)
{
    var n = parseInt(value);

    return n == null || isNaN(n) ? 0 : n;
}

$(document).ready(function(){
    init();
});
