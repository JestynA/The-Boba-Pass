const path = require('path');
const express = require('express');

const userController = require('./../userController');
const storeController = require('./../storeController');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../../dist')));
app.use(express.json());

// display index.html on root route
app.get('/',(req, res) => {

    return res.status(200).sendFile(path.join(__dirname,'../../src/index.html`'))
})

app.get('/styles.css',(req, res) => {
  return res.status(200).sendFile(path.join(__dirname,'../../src/styles.css'))
})


// user handling
app.post('/db/create', userController.createUser, (req, res) => {
  return res.status(200).send();
})

app.post('/db/login', userController.authorize, (req, res) => {
  console.log('nice');
  return res.redirect('http://localhost' + port + '/home')
})

// store handling
app.post('/db/createStore', storeController.addStore, (req, res) => {
  return res.status(200).send();
})

app.post('/db/deleteStore', storeController.deleteStore, (req, res) => {
  return res.status(200).send();
})

app.get('/db/getStores', storeController.getStores, (req, res) => {
  return res.status(200).json(res.locals.data.rows)
})

// drink handling
app.post('/db/addDrink', storeController.addDrink, (req, res) => {
  return res.status(200).send();
})

app.post('/db/deleteDrink', storeController.deleteDrink, (req, res) => {
  return res.status(200).send();
})

app.post('/db/getDrinks', storeController.getDrinks, (req, res) => {
  return res.status(200).json(res.locals.drinks.rows);
})

// invalid link handler
app.get('*', (req, res) => {
  res.status(404).send();
})


// global middleware error handling
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }, 
  };
  const errorObj = Object.assign(defaultErr, err);
  res.set('Content-Type','application/json');
  return res.status(errorObj.status).send(JSON.stringify(errorObj.message));
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

module.exports = app;
