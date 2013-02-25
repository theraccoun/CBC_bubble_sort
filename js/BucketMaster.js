function BucketMaster(numElements, percentWidth, swapSpeed){

    this.numElements = numElements;
    this.percentWidth = percentWidth;
    this.swapSpeed = swapSpeed;

    this.sortliststate = {
        firstClicked: null,
        secondClicked: null,
        order: new Array(),
        curIteration: -1
    };

    this.sortElements = {};

    this.initializeBuckets = function(){

        var buckMaster = this;

        var docWidth = $(document).width();
        var widthWithPad = docWidth - this.percentWidth * docWidth;
        var bucketWidth = Math.floor(widthWithPad/this.numElements);
        var buckMasterWidth = bucketWidth  * this.numElements;

        this.$jqBucketMaster = jQuery('<div/>', {
            id: 'bucketMaster',
            class: 'offset3'
        });

        this.$jqBucketMaster.appendTo($('body'));

        this.$jqBucketMaster.css('width', buckMasterWidth);
        this.$jqBucketMaster.css('height', bucketWidth);


        for(var i=0; i < this.numElements; ++i){

            var $bucket = jQuery('<div/>', {
                id: 'buck' + (i).toString(),
                class: 'bucket'
            });
            $bucket.css("width", bucketWidth);
            $bucket.css("height", "99%");

            this.$jqBucketMaster.append($bucket);

            console.log($bucket.attr('id'));
            var $switchToolHead = $("<div class='switchToolHead'></div>");
            $switchToolHead.data('index', i);
            $switchToolHead.appendTo($bucket);
            var height = $switchToolHead.height();
            $switchToolHead.css('top', -(height + 10));
            $switchToolHead.button().click(function(event){
                $(this).toggleClass(SHOW_SWT_CLICKED);

                var index1, index2;

                if(buckMaster.sortliststate.firstClicked == null){
                    buckMaster.sortliststate.firstClicked = $(this)
                }
                else if((index1 = buckMaster.sortliststate.firstClicked.data('index')) != (index2 = $(this).data('index'))){
                    buckMaster.sortliststate.secondClicked = $(this);
                    buckMaster.sortliststate.curIteration++;

                    buckMaster.animateSwap(buckMaster);
//                    isCorrectMove(index1, index2);
                }
                else{
                    buckMaster.sortliststate.firstClicked = null;
                }
            });

        }

        var originalList = new Array();

        this.$jqBucketMaster.children('.bucket').each(function(i) {

            var rand = Math.floor(Math.random()*11);
            buckMaster.sortliststate.order.push(rand);
            var $sortElement = $("<div class='sortElement'><p>" + rand + "</p></div>");

            buckMaster.sortElements[i] = $sortElement;

            $(this).append($sortElement);

            var parentHeight = $sortElement.parent().height();
            $sortElement.css("height", (parentHeight-7).toString()  + "px");

            originalList.push(rand);
        });

    }

    this.addToDom = function() {

        if(this.$jqBucketMaster != null){
            this.$jqBucketMaster.appendTo($('body'));
        }

    }

    this.animateSwap = function(buckMaster) {

        var firstIndex = buckMaster.sortliststate.firstClicked.data('index');
        var secondIndex = buckMaster.sortliststate.secondClicked.data('index');
        var firstSort = buckMaster.sortElements[firstIndex];
        var secondSort = buckMaster.sortElements[secondIndex];

        var firstAnimateAmount = (firstSort.offset().left - secondSort.offset().left).toString();
        firstSort.animate({left:'-=' + firstAnimateAmount}, SWAP_SPEED, function(){
            buckMaster.sortElements[firstIndex] = secondSort;
            buckMaster.sortliststate.firstClicked.removeClass(SHOW_SWT_CLICKED);
            buckMaster.sortliststate.firstClicked = null;
        });

        secondSort.animate({left:'+=' + firstAnimateAmount}, SWAP_SPEED, function(){
            buckMaster.sortElements[secondIndex] = firstSort
            buckMaster.sortliststate.secondClicked.removeClass(SHOW_SWT_CLICKED);
            buckMaster.sortliststate.secondClicked = null;
        });

    }


}
