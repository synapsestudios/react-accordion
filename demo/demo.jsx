'use strict';

var React     = require('react');
var Accordion = require('../src/accordion');

require('../scss/accordion');

var examplePanels = [
    {
        title   : 'Example Panel 1',
        message : 'Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'
    },
    {
        title   : 'Example Panel 2',
        message : 'Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'
    },
    {
        title   : 'Example Panel 3',
        message : 'Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.'
    },
    {
        title   : 'Example Panel 4',
        message : 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper. Etiam porta sem malesuada magna mollis euismod.'
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
