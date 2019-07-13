const db = require('../config/database');
const Ninja = require('../models/Ninja');
const Sequelize = require('sequelize');


module.exports.error = (req, res, next) => {
    res.send('Page not Found');
}

module.exports.test = (req, res, next) => {
    // res.send('Page not Found');

    Ninja.findAll()
        .then((ninjas) => {
            res.send(ninjas)
        })
        .catch((err) => {
            console.log('some error is occured' + err);
            res.send('some error is occured from test catch')
        })

}

module.exports.add = (req, res, next) => {
    // res.send('Page not Found');
    res.render('add');
}

module.exports.postAdd = (req, res, next) => {
    // res.send('Page not Found');
    // res.render('add');

    const { title, technologies, budget, email, description } = req.body;
    console.log(req.body);
    // res.send(title + technologies + budget + email);
    Ninja.create({
        title,
        technologies,
        description,
        budget,
        email,
    })
        .then(() => {
            console.log('Created object');
            res.redirect('/add');
        })
        .catch((err) => {
            console.log('error occured' + err);
        })
}