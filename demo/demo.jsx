'use strict';

var React  = require('react');
var Alert  = require('./dist/accordion');

require('./scss/accordion');

module.exports = React.createClass({

    render : function()
    {
        var styles = {
            maxWidth : '720px',
            margin   : '0 auto',
            padding  : '20px'
        }

        return (
            <div style={styles}>
                <Accordion />
            </div>
        );
    }

});
