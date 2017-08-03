
var router = require('express').Router();
var pg = require('pg');
var pool = require('../modules/database-config');


// adds new inspection site to DB
router.post('/addInspectionSite', function(req, res){
  var inspectionSite = req.body;
  pool.connect()
    .then(function (client) {
      client.query('INSERT INTO inspection_sites (contactName, companyName, licenseNumber, streetAddress, city, state, zipCode, country, phone, email, fax, schedualedDate) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)',
        [inspectionSite.contactName, inspectionSite.companyName, inspectionSite.licenseNumber, inspectionSite.streetAddress, inspectionSite.city, inspectionSite.state, inspectionSite.zipCode, inspectionSite.country, inspectionSite.phone, inspectionSite.email, inspectionSite.fax, inspectionSite.schedualedDate])
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
