const Models = require('.././models/model');

exports.init = (req, res) => {
	res.send('hello workshop mean des controllers').end();
}

exports.create = (req, res) => {
	let data = new Models({
		name: req.body.name,
		date: new Date()

	});

	data.save((err, result) => {
		if (err) {
			console.log(err);
		}
		console.log(result);
		res.json(result);
	});
}

exports.view = (req,res) => {
	Models.find((err, data) => {
		if (err) {
			console.log(err);
		}
		res.json(data);
	});
}