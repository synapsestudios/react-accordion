'use strict';

var React     = require('react');
var Accordion = require('../src/accordion');

require('../scss/app');

var examplePanels = [
    {
        title   : 'Example Panel 1',
        message : 'Example Message Here'
    },
    {
        title   : 'Example Panel 2',
        message : 'Example Message Here'
    }
];

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
                <Accordion panels={examplePanels} />
            </div>
        );
    }

});
