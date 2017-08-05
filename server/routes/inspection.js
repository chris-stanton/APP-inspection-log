
var router = require('express').Router();
var pg = require('pg');
var pool = require('../modules/database-config');


// adds new inspection site to DB
router.post('/addInspectionSite', function(req, res){
  var inspectionSite = req.body;
  pool.connect()
    .then(function (client) {
      client.query('INSERT INTO inspection_sites (users_id, companies_id, contactName, companyName, licenseNumber, streetAddress, city, state, zipCode, country, phone, email, fax, schedualedDate, inspectedDate) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)',
        [inspectionSite.users_id, inspectionSite.contactName, inspectionSite.companies_id, inspectionSite.companyName, inspectionSite.licenseNumber, inspectionSite.streetAddress, inspectionSite.city, inspectionSite.state, inspectionSite.zipCode, inspectionSite.country, inspectionSite.phone, inspectionSite.email, inspectionSite.fax, inspectionSite.schedualedDate, inspectionSite.inspectedDate])
        .then(function (result) {
          client.release();
            res.sendStatus(200);
        }).catch(function (err) {
          console.log('error updating user database:', err);
            res.sendStatus(500);
        });
    });// end of .then
});// end router.put

// adds page two site to DB
router.post('/postPageTwo', function(req, res){
  var pageTwo = req.body;
  pool.connect()
    .then(function (client) {
      client.query('INSERT INTO page_two (quantityBells, circuitStyleBells, quantityHorns, circuitStyleHorns, inspection_site_id) VALUES ($1, $2, $3, $4, $5)',
        [pageTwo.quantityBells, pageTwo.circuitStyleBells, pageTwo.quantityHorns, pageTwo.circuitStyleHorns, pageTwo.inspection_site_id])
        .then(function (result) {
          client.release();
            res.sendStatus(200);
        }).catch(function (err) {
          console.log('error updating user database:', err);
            res.sendStatus(500);
        });
    });// end of .then
});// end router.put

// adds page three to DB
router.post('/postPageThree', function(req, res){
  var pageThree = req.body;
  pool.connect()
    .then(function (client) {
      client.query('INSERT INTO page_three (quantityBuildingTemp, circuitStyleBuildingTemp, quantityWaterTemp, circuitStyleWaterTemp, inspection_site_id) VALUES ($1, $2, $3, $4, $5)',
        [pageThree.quantityBuildingTemp, pageThree.circuitStyleBuildingTemp, pageThree.quantityWaterTemp, pageThree.circuitStyleWaterTemp, pageThree.inspection_site_id])
        .then(function (result) {
          client.release();
            res.sendStatus(200);
        }).catch(function (err) {
          console.log('error updating user database:', err);
            res.sendStatus(500);
        });
    });// end of .then
});// end router.put

// adds page five to DB
router.post('/postPageFive', function(req, res){
  var pageFive = req.body;
  pool.connect()
    .then(function (client) {
      client.query('INSERT INTO page_five (monitoringEntityInspected, monitoringEntityInspector, monitoringEntityTime, buildingOccupantsInspected, buildingOccupantsInspector, buildingOccupantsTime, inspection_site_id) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [pageFive.monitoringEntityInspected, pageFive.monitoringEntityInspector, pageFive.monitoringEntityTime, pageFive.buildingOccupantsInspected, pageFive.buildingOccupantsInspector, pageFive.buildingOccupantsTime, pageFive.inspection_site_id])
        .then(function (result) {
          client.release();
            res.sendStatus(200);
        }).catch(function (err) {
          console.log('error updating user database:', err);
            res.sendStatus(500);
        });
    });// end of .then
});// end router.put

// adds page six to DB
router.post('/postPageSix', function(req, res){
  var pageSix = req.body;
  pool.connect()
    .then(function (client) {
      client.query('INSERT INTO page_six (controlUnitInspected, controlUnitComments, interfaceEqInspected, interfaceEqComments, inspection_site_id) VALUES ($1, $2, $3, $4, $5)',
        [pageSix.controlUnitInspected, pageSix.controlUnitComments, pageSix.interfaceEqInspected, pageSix.interfaceEqComments, pageSix.inspection_site_id])
        .then(function (result) {
          client.release();
            res.sendStatus(200);
        }).catch(function (err) {
          console.log('error updating user database:', err);
            res.sendStatus(500);
        });
    });// end of .then
});// end router.put

// post page seven to db
router.post('/postPageSeven', function(req, res){
  var pageSeven = req.body;
  pool.connect()
    .then(function (client) {
      client.query('INSERT INTO page_seven (phoneSetVisual, phoneSetFunctional, phoneSetComments, phoneJacksVisual, phoneJacksFunctional, phoneJacksComments, inspection_site_id) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [pageSeven.phoneSetVisual, pageSeven.phoneSetFunctional, pageSeven.phoneSetComments, pageSeven.phoneJacksVisual, pageSeven.phoneJacksFunctional, pageSeven.phoneJacksComments, pageSeven.inspection_site_id])
        .then(function (result) {
          client.release();
            res.sendStatus(200);
        }).catch(function (err) {
          console.log('error updating user database:', err);
            res.sendStatus(500);
        });
    });// end of .then
});// end router.put

// adds file upload to db
router.post('/postPageFileUpload', function(req, res){
  var fileUpload = req.body;
  pool.connect()
    .then(function (client) {
      client.query('INSERT INTO file_upload (inspection_site_id) VALUES ($1)',
        [fileUpload.inspection_site_id])
        .then(function (result) {
          client.release();
            res.sendStatus(200);
        }).catch(function (err) {
          console.log('error updating user database:', err);
            res.sendStatus(500);
        });
    });// end of .then
});// end router.put




module.exports = router;
