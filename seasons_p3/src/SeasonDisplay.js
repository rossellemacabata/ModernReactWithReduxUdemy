import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
	summer: {
		text: "Let's hit the beach!",
		seasonIcon: "sun"
	},
	winter: {
		text: "Burr, it's chilly!",
		seasonIcon: "snowflake"
	}
}

const getSeason = (lat,month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? "summer" : "winter";
	} else {
		return lat > 0 ? "winter" : "summer";
	}
}

const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	const {text, seasonIcon} = seasonConfig[season]

	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left massive ${seasonIcon} icon`} />
			<h1>{text}</h1>
			<i className={`icon-right massive ${seasonIcon} icon`} />
		</div>
	)
};

export default SeasonDisplay;