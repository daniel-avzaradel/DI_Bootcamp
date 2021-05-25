const exp = require('express');
const bp = require('body-parser');

const app = exp();

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())

app.use('/', exp.static(__dirname+'/public'));

app.route('/login')
  .get((req,res)=>{
    console.log(req.query);
    let obj = {
      message:'ok'
    }
    res.send(obj)
  })
  .post((req,res)=>{
    console.log(req.body);
    res.send({message:'from post method'})
  })

app.get('/user/:id', (req,res)=>{
  console.log(req.params);
  res.send('hello user id:' + req.params.id)
})
// app.get('/login', (req,res)=>{
//
// })
//
// app.post('/login', (req,res)=>{
//
// })

app.listen(3000)
