import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

let socket;

const Chat = ({location}) => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');
	const [message, setMessage] = useState('')
	const [messages, setMessages] = useState([])
	const ENDPOINT = 'localhost:9001'

	useEffect(() => {
		const {name, room} = queryString.parse(location.search);

		socket = io(ENDPOINT);

		setName(name)
		setRoom(room)

		socket.emit('join', {name, room}, () => {
			
		})

		return () => {
			socket.emit('disconnect');

			socket.off();
		}
	}, [ENDPOINT, location.search])

	useEffect(() => {
		socket.on('message', (message) => {
			setMessages([...messages, message])
		})
	}, [messages])

	const sendMessage = (event) => {
		event.preventDefault();

		if (message) {
			socket.emit('sendMessage', message, () => {
				setMessage('')
			})
		}
	}

	console.log(message, messages)

	return (
		<div className="outerContainer">
			<div className="innerContainer">
				<input 
				value={message} 
				onChange={(e) => {
					setMessage(e.target.value)
				}}
				onKeyPress={(e) => e.key === 'Enter' ? sendMessage() : null}
				/> 
			</div>
		</div>
	)
}

export default Chat
