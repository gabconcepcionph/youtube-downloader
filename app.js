const fs = require('fs');
const youtubedl = require('youtube-dl');

const video = youtubedl(process.argv[2]);

video.on('info', function(info){
	console.log('Download started');
	console.log(`filename:` +info._filename);
	console.log(`size: ${info.size/1000000}mb`);
});

video.pipe(fs.createWriteStream(process.argv[3]));
