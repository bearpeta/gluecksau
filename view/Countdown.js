import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../color';

export default class Countdown extends Component {

    constructor(props) {
        super(props)

        this.renderDisplayTime = this.renderDisplayTime.bind(this)
    }

    renderDisplayTime(time) {
        minutes = Math.floor(time / 60)
        seconds = time - (minutes * 60)

        minutes = ('0' + minutes).slice(-2)
        seconds = ('0' + seconds).slice(-2)

        return {
            minutes: minutes,
            seconds: seconds
        }
    }

	render() {
        displayTime = this.renderDisplayTime(this.props.time)

		return (
            <View style={{width: this.props.width, height: this.props.height}}>
            <View style={customStyles.container}>
                <Text style={[customStyles.text, customStyles.firstText]}>{displayTime.minutes}</Text>
                <Text style={[customStyles.text, customStyles.middleText]}>:</Text>
                <Text style={[customStyles.text, customStyles.lastText]}>{displayTime.seconds}</Text>
            </View>
            </View> 
		);
	}
}

Countdown.propTypes = {
    time: PropTypes.number.isRequired,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

const customStyles = StyleSheet.create({
    container: {
        width: "100%",
        aspectRatio: 1,
        padding: 5,
        borderWidth:2,
        borderColor: Colors.darkPink,
        borderRadius: 100/2,
        backgroundColor: 'white',
        flexDirection: "row",
        justifyContent:"center", 
        alignItems: "center"
    },
    text: {
        color: Colors.darkPink,
        fontWeight:"bold"
    },
    firstText: {

    },
    middleText: {

    },
    lastText: {

    }
});