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


storeController.getDrinks = async (req, res, next) => {
    console.log(req.body.vendorId)
    try{
         const queryString = 'SELECT * FROM menu_items WHERE (vendor_id =' + req.body.vendorId + ');'; 

         res.locals.drinks = await db.query(queryString);
         

         next();
    }
    catch (err){
        next(err)
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
    console.log(req.body)
    try{
        const queryString = 'INSERT INTO menu_items (vendor_id,item_name, description, item_price) VALUES ('+ req.body.vendor_id + ',\'' + req.body.name + '\',\'' + req.body.desc + '\',\'' + req.body.price + '\');';
        db.query(queryString)
        next();

    } catch (err){
        next(err);
    }
}

storeController.deleteStore = (req, res, next) => {
    try{
        const queryString = 'DELETE FROM vendors WHERE address =\''+req.body.address+'\' '
        db.query(queryString)
        next()
    } catch (err){
        next(err);
    }
}

storeController.deleteDrink = (req, res, next) => {
    console.log('body', req.body)
    try{
        const queryString = 'DELETE FROM menu_items WHERE (item_name =\'' + req.body.name + '\' AND vendor_id=' + req.body.vendor + ');';

        db.query(queryString);
        next();
    } catch(err){
        next(err);
    }
}


module.exports = storeController;