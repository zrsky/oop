(function(root, factory) {
	root.DN = factory();
})(this, function() {
	var DN = {
		myCall: function(fn1, context) {
			context = context ? context : window;
			var _fn = context.fn;
			var args = [];
			for (var i = 2; i < arguments.length; i++) {
				args.push(arguments[i]);
			}
			context.fn = fn1;
			context.fn(...args);
			_fn ? context.fn = _fn : delete context.fn;
		}
	};
	return DN;
})