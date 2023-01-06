const tableController=require('../controllers/tablesController');
const express=require('express');
const Router=express.Router();
Router.route('/createUserTable').get(tableController.createUserTable);
Router.route('/createStartupTable').get(tableController.createStartupTable);
Router.route('/createQueryTable').get(tableController.createQueryTable)
Router.route('/createQueryMnTable').get(tableController.createQueryMnTable);
Router.route('/createLocationTable').get(tableController.createStartupLocation);

module.exports=Router;