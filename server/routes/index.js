const path = require('path');
const express = require('express');

const userController = require('./../userController');
const { restart } = require('nodemon');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../../dist')));
app.use(express.json());



// user handling

app.post('/db/create', userController.createUser, (req, res) => {
  
})

app.post('/db/login', userController.authorize, (req, res) => {
  res.redirect('/home');
})



// display index.html on root route
app.get('/',(req, res) => {

    return res.status(200).sendFile(path.join(__dirname,'../../src/index.html`'))
})

app.get('/styles.css',(req, res) => {
  return res.status(200).sendFile(path.join(__dirname,'../../src/styles.css'))
})






// invalid link handler
app.get('*', (req, res) => {
  console.log('invalid link');
    res.status(404).send();
})

app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' }, 
    };
    const errorObj = Object.assign(defaultErr, err);
    console.log(errorObj.log);
    res.set('Content-Type','application/json');
    return res.status(errorObj.status).send(JSON.stringify(errorObj.message));
  });

  app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
  });

  module.exports = app;