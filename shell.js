var shell = {
	execute: function(){
		var sys = require('sys')
		var exec = require('child_process').exec;
		function puts(error, stdout, stderr) {sys.puts(stdout)}
		exec("php build.php", puts);
	}
};

module.exports = shell;