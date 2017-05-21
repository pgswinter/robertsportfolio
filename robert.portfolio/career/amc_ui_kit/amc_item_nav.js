(function($){

	$.fn.itemnav = function() {

	    var me = $(this);
		//$(window).on('resize load',function(){
	    var widt = $(window).width();

			if(widt > 1024) {

			    var wrapItem = $('ul', me);
			    var item = $('ul li', me);
			    var numbItem = item.length;

				//item.width(wrapItem.width() / numbItem)
			    item.width(parseFloat(wrapItem.width() / numbItem - 1).toFixed(2));
			    wrapItem.height('auto');

			    var wrapItemDiv = $('.devideMe', me);
			    var itemDiv = $('.devideMe .item', me);
			    var numbItemDiv = itemDiv.length;

			    itemDiv.width(parseFloat(wrapItemDiv.width() / numbItemDiv - 1).toFixed(2));
			    wrapItemDiv.height('auto');

			}

		//})
	}

})(jQuery)