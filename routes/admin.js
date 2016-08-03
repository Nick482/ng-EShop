var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var Item = require('../models').Item;
var Admin = require('./admin');

router.get('/', function(req, res){
   res.render('admin', {title: 'Merchandise addition'});
});

router.post('/add', function(req, res) {
    Item.find({where: Sequelize.and({name : req.body.name}, {group : req.body.group}, {subgroup: req.body.subgroup},
        {image: req.body.image},{price: req.body.price},{code: req.body.code},{maker: req.body.maker})}).then(function(item){
        if(!item){
            Item.create(req.body).then(function(item){
                res.status(223).send("Item added. Move on!")
            })
        }
        else {
            res.status(224).send("Specified item already exists within the database. Please revise!")
        }
    });
});

module.exports = router;