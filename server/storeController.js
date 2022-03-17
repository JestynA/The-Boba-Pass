const db = require('./models/database');

const storeController = {};

storeController.getStores = async (req, res, next) => {
    try{
        const queryString = 'SELECT * FROM vendors';
        res.locals.data = await db.query(queryString);
  
        next();
    } catch (err){
        next(err);
    }
}

storeController.addStore = (req, res, next) => {
    try{
        const queryString = 'INSERT INTO vendors (vendor_name,city,address,zip,description) VALUES (\''+ req.body.name + '\',\''+ req.body.city + '\',\'' + req.body.address + '\',\'' + req.body.zip + '\',\'' + req.body.desc + '\');'
        db.query(queryString)
        next()
    } catch(err){
        next(err);
    }
   
}


storeController.addDrink = (req, res, next) => {

}


storeController.deleteStore = (req, res, next) => {
    try{
        const queryString = 'DELETE FROM vendors WHERE address =\''+req.body.address+'\''
        db.query(queryString)
        next()
    } catch (err){
        next(err);
    }
}

storeController.deleteDrink = (req, res, next) => {

}


module.exports = storeController;