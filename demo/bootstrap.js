'use strict';

require('../scss/app');

var React = require('react');
var Demo  = require('./demo');

window.onload = function() {
    React.render(
        React.createElement(Demo),
        window.document.getElementById('content')
    );
};
