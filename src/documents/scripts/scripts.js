window.addEvent('domready', function() {
	$$('.register').addEvent('load', function(){
		console.log('register iframe loaded');
		console.log(this.getSize().y);
	});
});