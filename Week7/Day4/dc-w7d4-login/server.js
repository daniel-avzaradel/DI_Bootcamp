const exp = require('express');
const app = exp();
const fs = require('fs')
const bp = require('body-parser')

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())
app.use('/', exp.static(__dirname+'/public'));

app.post('/registered', (req, res) => {
    console.log(req.body)
    console.log('listening...123')
    let file = './users.txt';
	let list = [];
	try {
		let fileData = fs.readFileSync(file);
		let fileString = fileData.toString();
	} catch(err) {
		console.log(err);
	}
		list.push(req.body);
		// console.log(list);
		fs.appendFileSync(file,JSON.stringify(list))
		res.send(true)
})

app.set('port', 3000)
app.listen(app.get('port'), () => {
    console.log(`Im listening to the port: ${app.get('port')}`)
})