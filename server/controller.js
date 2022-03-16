// const db = require('./models/userModel');

// //  import db from '../models/userModel'

// const userController = {};


// userController.createUser = (req, res, next) => {
// if(req.body.firstName && req.body.lastName && req.body.email && req.body.password){
//     const queryString = 'INSERT INTO public.user (first_name, last_name, email, password) VALUE ('+ req.body.firstName +','+ req.body.lastName +','+ req.body.email +','+ req.body.password +');'
//     console.log(queryString);
//     db.query(queryString);
//     next();
// } else{
//     const errorObj = {};
//     errorObj.status = 400;
//     errorObj.log = 'createUser middleware error';
//     next(errorObj);
// }
// }


// userController.login = (req, res) => {

// }

// module.exports = userController;