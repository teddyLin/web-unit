(function(window) {

	var jasmineEnv = jasmine.getEnv();
	jasmineEnv.updateInterval = 1000;

	var htmlReporter = new jasmine.HtmlReporter();
	jasmineEnv.addReporter(htmlReporter);

	jasmineEnv.specFilter = function(spec) {
		return htmlReporter.specFilter(spec);
	};

	var jasmineEnv = jasmine.getEnv();
	jasmineEnv.updateInterval = 1000;

	var txtReporter = new TextReporter();

	window.txtReporter = txtReporter;
	txtReporter.onRunnerFinished(function(text) {
		console.log('one test case finish');
	});

	jasmineEnv.addReporter(txtReporter);


	var currentWindowOnload = window.onload;
	window.onload = function() {
		if (currentWindowOnload) {
			currentWindowOnload();
		}
		execJasmine();
		console.log('finish');
	};

	function execJasmine() {
		jasmineEnv.execute();
	}

})(window);