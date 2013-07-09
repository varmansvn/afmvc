var app = new $.mvc.app();
app.loadControllers(['hello']);
app.ready(function() {
	$.mvc.route('hello/');
});