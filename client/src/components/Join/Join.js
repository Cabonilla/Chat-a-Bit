import 'bulma/css/bulma.min.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const Join= () => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');

	return (
		<div className="joinOuterContainer">
			<div className="joinInnerContainer">
				<h1 id="hero-title" className="title is-3 heading is-capitalized">Chat-A-Bit</h1>
				<div><input placeholder="Name" className="input is-rounded joinInput" type="text" onChange={(e) => setName(e.target.value)} autoFocus></input></div>
				<div><input placeholder="Room" className="input is-rounded joinInput" type="text" onChange={(e) => setRoom(e.target.value)}></input></div>
				<Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
					<button id="submitButton" className="button is-rounded is-fullwidth is-outlined" type="submit">Join Room</button>
				</Link>
			</div>
		</div>
	)
}

export default Join 

