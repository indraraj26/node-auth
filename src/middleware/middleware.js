const cors = require('cors');
const helmet = require('helmet');
const override = require('method-override');
const morgan = require('morgan');
const express = require('express');

module.exports = function(app) {
    app.use(cors());
    app.use(helmet());
    app.use(override());
    app.use(morgan('dev'))
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));
    app.use(require('./body.logger'))
}