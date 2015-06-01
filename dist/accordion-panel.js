'use strict';

var React = require('react');

module.exports = React.createClass({

    displayName: 'AccordionPanel',

    propTypes: {
        message: React.PropTypes.string,
        title: React.PropTypes.string,
        onClick: React.PropTypes.func
    },

    render: function render() {
        return React.createElement(
            'div',
            { className: this.props.className, key: this.props.key, style: this.props.style },
            React.createElement('div', { className: 'accordion__panel__click', onClick: this.props.onClick }),
            React.createElement(
                'div',
                { className: 'accordion__panel__header' },
                this.props.title
            ),
            React.createElement(
                'div',
                { className: 'accordion__panel__content' },
                this.props.message
            )
        );
    }

});