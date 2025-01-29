const fs = require('fs');
const path = require('path');

const postDirectories = '_posts/';
const imagesDirectory = 'assets/posts/';
// Read the contents of the directory
fs.readdir(postDirectories, (err, files) => {
	if (err) {
		throw 'Error reading directory:' + err;
	}

	// Log the list of file names
	console.log('Files in the directory:');
	files.forEach(file => {
		const name = file.split('.')[0];

		console.log(postDirectories+file);
		var content = fs.readFileSync(postDirectories+file, 'utf8');
		const regexp = /\/assets\/posts\/\w*.jpg/g;
		const matches = Array.from(content.matchAll(regexp), m => m[0]);
		const unique = Array.from(new Set(matches));

		const newDir = path.join(imagesDirectory, name)
		if (!fs.existsSync(newDir)) {
			fs.mkdirSync(newDir);
		}
		var num = 1;
		unique.forEach((img) => {
			const newFile = path.join(newDir, '/0'+num+'.jpg');
			const imgFile = img.replace(/^\/+/, '');
			fs.renameSync(imgFile, newFile);
			content = content.replaceAll(img, path.join('/', newFile));
			num++;
		});

		content += '\n{% include image-gallery.html folder="/' + newDir + '" %}\n';
		fs.writeFileSync(postDirectories+file, content, "utf8");
	});
});
