var arrayButtonString = unescape('<div class="btn-group"> \
        <button class="btn btn-danger">Array Size</button> \
        <button class="btn btn-danger dropdown-toggle" data-toggle="dropdown"> \
            <span class="caret"></span> \
        </button> \
        <ul class="dropdown-menu"> \
            <li><a onclick="setMaxSortElements(\'Big\', bubbleSort)">Big</a></li> \
            <li><a onclick="setMaxSortElements(\'Medium\', bubbleSort)">Medium</a></li> \
            <li><a onclick="setMaxSortElements(\'Small\', bubbleSort)">Small</a></li> \
        </ul> \
    </div>');

var $arraySize = $(arrayButtonString);

