import React from 'react'
import closeIcon from '../../icons/closeIcon.svg'
import onlineIcon from '../../icons/onlineIcon.svg'
import './InfoBar.css'

const InfoBar = ({ room }) => (
	<div className="infoBar">
		<div className="leftInnerContainer">
			<img className="onlineIcon" src={onlineIcon} alt="online"/>
			<h3 className="room">{room}</h3>	
		</div>
		<div className="rightInnerContainer">
			<a href="/"><img className="closeIcon" src={closeIcon} alt="close"/></a>
		</div>
	</div>
)

export default InfoBar