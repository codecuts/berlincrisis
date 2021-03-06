window.addEvent('domready', function() {

	$$('section.intro').setStyle('height', window.getSize().y);

	// Handle resize event
	function updateLayout() {
		$$('section.intro').setStyle('height', window.getSize().y);
	}
    window.addEvent('resize', updateLayout.debounce(250));

});

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 *
 * @param {int} wait Number of millisecond to wait before function calls itself again.
 * @param {Boolean} immediate If true then function will be triggered on leading edge instead of trailing.
 *
 * @return {Function} Function that will continue to call itself until no longer invoked.
 */
Function.implement('debounce', function(wait, immediate) {
	var timeout, args, context, timestamp, result;

	var func = this;

	var later = function() {
		var last = new Date().getTime() - timestamp;

		if (last < wait && last > 0) {
			timeout = setTimeout(later, wait - last);
		}
		else {
			timeout = null;
			if (!immediate) {
			  result = func.apply(context, args);
			  if (!timeout) {
			  	context = args = null;
			  }
			}
		}
    };

	return function() {
		context = this;
    	args = arguments;
    	timestamp = new Date().getTime();
    	var callNow = immediate && !timeout;
     	if (!timeout) {
    		timeout = setTimeout(later, wait);
    	}
      	if (callNow) {
        	result = func.apply(context, args);
        	context = args = null;
      	}
      	return result;
		};

});