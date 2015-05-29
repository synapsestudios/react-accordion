'use strict';

var React        = require('react/addons');
var AnimateMixin = require('react-animate');
var PanelItem    = require('accordion-panel');

module.exports = React.createClass({

    displayName : 'Accordion',

    mixins: [AnimateMixin],

    propTypes: {
        panels      : React.PropTypes.arrayOf(React.PropTypes.shape({
            title   : React.PropTypes.string,
            message : react.React.PropTypes.string
        })),
        toggleHeight : React.PropTypes.number
    },

    getDefaultProps: function()
    {
        return {
            toggleHeight : 40
        };
    },

    getInitialState: function()
    {
        return {
            animationData : this.getInitialAnimationData(panels.length)
        };
    },

    getInitialAnimationData : function(numItems)
    {
        var animationData = [];

        for (var i = 0; i < numItems; i += 1) {
            animationData.push({
                animating : false,
                open      : i === 0
            });
        }

        return animationData;
    },

    componentWillReceiveProps : function(nextProps, nextState)
    {
        this.setState({
            animationData : this.getInitialAnimationData(nextProps.panels.length)
        });
    },

    toggle: function(id, e)
    {
        var self, currentHeight, scrollHeight, toggleHeight, newHeight, animationData;

        self          = this;
        currentHeight = this.getParentHeight(e);
        scrollHeight  = this.getParentScrollHeight(e);
        toggleHeight  = this.props.toggleHeight;
        animationData = this.state.animationData;

        animationData[id].animating  = true;

        this.setState({animationData : animationData});

        newHeight = currentHeight >= toggleHeight ? toggleHeight + "px" : scrollHeight + "px";

        this.animate(
            id + "toggle",
            {height : currentHeight + "px"},
            {height : newHeight},
            400,
            {
                onComplete : function()
                {
                    var newMap = self.state.animationData;

                    newMap[id].animating    = false;
                    newMap[id].open         = newHeight !== toggleHeight + "px";
                    self.setState({animationData : newMap});
                }
            }
        );
    },

    getParentHeight : function(e)
    {
        return e.target.parentNode.clientHeight;
    },

    getParentScrollHeight : function(e)
    {
        return e.target.parentNode.scrollHeight;
    },

    getClassesForType : function(type)
    {
        return [
            'accordion__item',
            'accordion__item--' + type,
            this.props.itemClassName
        ].join(' ');
    },

    renderItem : function(item, index)
    {
        var animationData, style;

        animationData = this.state.animationData[index];
        style         = {height:'auto'};

        if (animationData.animating === true) {
            style.height = this.getAnimatedStyle(index + 'toggle').height;
        } else {
            style.height = animationData.open ? 'auto' : this.props.toggleHeight + 'px';
        }

        renderMethod = item.type === VEHICLE ? this.renderVehicle : this.renderCargoItem;

        return (
            <PanelItem
                style     = {style}
                onClick   = {this.toggle.bind(this, index)}
                className = {'accordion__panel'}
                key       = {'accordion-panel-' + index}
                message   = {item.message}
                title     = {item.title}
            />
        );
    },

    render : function()
    {
        var containerStyle = [
            'accordion__wrapper',
            this.props.className
        ].join(' ');

        return (
            <div className={containerStyle}>
                {this.panels().map(this.renderItem)}
            </div>
        );
    }
});