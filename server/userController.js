const db = require('./models/database');

const userController = {};

userController.createUser = async (req, res, next) => {
    if(req.body.firstName && req.body.lastName && req.body.email && req.body.password){
        //check if email exists in the database already to prevent duplicates
        const emailCheck = 'SELECT EXISTS (SELECT 1 FROM public.user WHERE email = \'' + req.body.email + '\');'
        if(await db.query(emailCheck)){
            const queryString = 'INSERT INTO public.user (first_name, last_name, email, password) VALUES (\''+ req.body.firstName +'\',\''+ req.body.lastName +'\',\''+ req.body.email +'\',\''+ req.body.password +'\');'
            next();   
        } 
        // if email exists
        next({
        status : 422,
        log : 'email already exists!'   
        })        
    } else{
        const errorObj = {};
        errorObj.status = 422;
        errorObj.log = 'createUser middleware error';
        next(errorObj);
    }
}

userController.authorize = async (req, res, next) => {
    // checks for both inputs to be filled out
    if(req.body.email && req.body.password){
        const queryString = 'SELECT EXISTS(SELECT 1 FROM public.user WHERE email =\'' + req.body.email + '\' AND password =\''+ req.body.password + '\' );'
        const successful = await db.query(queryString)

        // successful login
        if(successful.rows[0].exists){
            next();
        }
        // failed login
        else {
            const errorObj = {};
            errorObj.status = 422;
            errorObj.log = 'Incorrect username/password';
            next(errorObj); 
        }
    }
    // missing password input
    else if(req.body.email && !req.body.password){
        const errorObj = {};
        errorObj.status = 422;
        errorObj.log = 'Missing password!';
        next(errorObj);
    }
    // missing email input
    else if(!req.body.email && req.body.password){
        const errorObj = {};
        errorObj.status = 422;
        errorObj.log = 'Missing username!';
        next(errorObj);
    }
    // catchall error
    else {
        const errorObj = {};
        errorObj.status = 422;
        errorObj.log = 'login middleware error';
        next(errorObj);
    }
}

module.exports = userController;