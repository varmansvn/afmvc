$.mvc.controller.create('hello', {
	views: ['views/hello.js', 'views/world.js'],
	init: function() {
		console.log('init is called');
	},
	default: function() {
		$('#main').html($.template('views/hello.js'));
	},
	world: function() {
		$('#main').html($.template('views/world.js'));
	}
});