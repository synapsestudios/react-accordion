'use strict';

var React = require('react');

module.exports = React.createClass({

    displayName : 'AccordionPanel',

    propTypes: {
        message : React.PropTypes.string,
        title   : React.PropTypes.string
        onClick : React.PropTypes.func
    },

    render : function()
    {
        return (
            <div className={this.props.className} key={this.props.key} style={this.props.style}>
                <div className='accordion__item__click' onClick={this.props.onClick}></div>
                    <div className='accordion__item__header'>
                         {this.props.title}
                    </div>
                    <div className='accordion__item__content'>
                        {this.props.message}
                    </div>
            </div>
        );
    }

});
