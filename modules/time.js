var os = require('os');

function timer(uptime) {
	// var time = os.uptime();
	var seconds = Math.floor(uptime % 60);
	var minutes = Math.floor((uptime % 3600) / 60);
	var hours = Math.floor(uptime / 3600);

	console.log('Uptime: ' + hours + 'h. ' + minutes + 'min. ' + seconds + 'sec.');
}

exports.print = timer;

