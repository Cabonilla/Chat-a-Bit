import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

let socket;

const Chat = ({location}) => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');
	const ENDPOINT = 'localhost:9001'

	useEffect(() => {
		const {name, room} = queryString.parse(location.search);

		socket = io(ENDPOINT);

		setName(name)
		setRoom(room)

		socket.emit('join', {name, room}, ({error}) => {
			alert(error)
		})
	}, [ENDPOINT, location.search])

	return (
		<div> 
			<h1>Chat</h1>
		</div>
	)
}

export default Chat
