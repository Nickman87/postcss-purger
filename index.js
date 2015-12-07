var helpers = require('postcss-message-helpers');
var postcss = require('postcss');

module.exports = postcss.plugin('postcss-purger', function(opts) {
	return function(css, result) {
		return new Promise(function(resolve, reject) {

			helpers.try(function() {
				css.walk(function (node) {
					if (node.raws.imported) {
						node.parent.removeChild(node);
					}
				});

				resolve();
			});

		});
	};
});
