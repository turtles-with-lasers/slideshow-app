var db = require('./../database.js');
var bcrypt = require('bcrypt-nodejs');
var uuid = require('node-uuid');

var exports = module.exports = {};

exports.register = function (req, res)
{
    var email = req.body.email;
    var password = req.body.password;

    bcrypt.hash(password, null, null, function (err, hash) {
        db('users').insert({
            email: email,
            password: hash
        }).then(function (ret) {
            return res.json({success: true, message: 'ok'});
        });
    });
};

exports.login = function (req, res)
{
    var email = req.body.email;
    var password = req.body.password;

    db('users').where({email: email})
        .first('password')
        .then(function (ret) {
            bcrypt.compare(password, ret.password, function (err, compare) {
                if (!compare) {
                    return res.json({success: false, message: 'incorrect password'});
                }

                var api_token = uuid.v4();
                db('users').insert({api_token: api_token})
                    .then(function (ret) {
                        return res.json({success: true, message: 'ok', data: {api_token: api_token}})
                    });
            });
        });
};
