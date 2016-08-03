var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var Item = require('../models').Item;


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/search', function(req, res){
    console.log(req.body);
    Item.findAll({where: Sequelize.or({name: {ilike : '%' + req.body.name + '%'}}, {maker: {ilike: '%' +req.body.name + '%'}},
                {group: {ilike: '%' + req.body.name + '%'}}, {subgroup: {ilike: '%' + req.body.name + '%'}})}).then(function (items) {
        if (items) {
            res.send(items);
        }
        else { console.log("not found")}
    })
});

router.post('/search/subCat', function(req, res){
    Item.findAll({where: {subgroup: req.body.subCond}}).then(function(items){
        if(!items){
            res.status(246).send("Error")
        }
        else {
            res.send(items)
        }
    })
});

router.use('/admin', Admin);

router.post('/selection', function(req, res){
        console.log(req.body.id);
        Item.find({where: {id : req.body.id}}).then(function(item){
            res.send(item)
        })
    }

);

module.exports = router;
