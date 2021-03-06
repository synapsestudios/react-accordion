'use strict';

var React = require('react/addons');
var AnimateMixin = require('react-animate');
var PanelItem = require('./accordion-panel');

module.exports = React.createClass({

    displayName: 'Accordion',

    mixins: [AnimateMixin],

    propTypes: {
        panels: React.PropTypes.arrayOf(React.PropTypes.shape({
            title: React.PropTypes.string,
            message: React.PropTypes.string,
            panelClassName: React.PropTypes.string
        })),
        toggleSpeed: React.PropTypes.number,
        toggleHeight: React.PropTypes.number,
        className: React.PropTypes.string
    },

    getDefaultProps: function getDefaultProps() {
        return {
            toggleSpeed: 400,
            toggleHeight: 40
        };
    },

    getInitialState: function getInitialState() {
        return {
            animationData: this.getInitialAnimationData(this.props.panels.length)
        };
    },

    getInitialAnimationData: function getInitialAnimationData(numItems) {
        var animationData = [];

        for (var i = 0; i < numItems; i += 1) {
            animationData.push({
                animating: false,
                open: i === 0
            });
        }

        return animationData;
    },

    componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextState) {
        this.setState({
            animationData: this.getInitialAnimationData(nextProps.panels.length)
        });
    },

    toggle: function toggle(id, e) {
        var self, currentHeight, scrollHeight, toggleHeight, newHeight, animationData;

        self = this;
        currentHeight = this.getParentHeight(e);
        scrollHeight = this.getParentScrollHeight(e);
        toggleHeight = this.props.toggleHeight;
        animationData = this.state.animationData;

        animationData[id].animating = true;

        this.setState({ animationData: animationData });

        newHeight = currentHeight >= toggleHeight ? toggleHeight + 'px' : scrollHeight + 'px';

        this.animate(id + 'toggle', { height: currentHeight + 'px' }, { height: newHeight }, this.props.toggleSpeed, {
            onComplete: function onComplete() {
                var newMap = self.state.animationData;

                newMap[id].animating = false;
                newMap[id].open = newHeight !== toggleHeight + 'px';
                self.setState({ animationData: newMap });
            }
        });
    },

    getParentHeight: function getParentHeight(e) {
        return e.target.parentNode.clientHeight;
    },

    getParentScrollHeight: function getParentScrollHeight(e) {
        return e.target.parentNode.scrollHeight;
    },

    renderItem: function renderItem(item, index) {
        var animationData, style, panelClass;

        animationData = this.state.animationData[index];
        style = { height: 'auto' };
        panelClass = ['accordion__panel', this.props.panelClassName].join(' ');

        if (animationData.animating === true) {
            style.height = this.getAnimatedStyle(index + 'toggle').height;
        } else {
            style.height = animationData.open ? 'auto' : this.props.toggleHeight + 'px';
        }

        return React.createElement(PanelItem, {
            style: style,
            onClick: this.toggle.bind(this, index),
            className: panelClass,
            key: 'accordion-panel-' + index,
            message: item.message,
            title: item.title
        });
    },

    render: function render() {
        var containerStyle = ['accordion__wrapper', this.props.className].join(' ');

        return React.createElement(
            'div',
            { className: containerStyle },
            this.props.panels.map(this.renderItem)
        );
    }
});