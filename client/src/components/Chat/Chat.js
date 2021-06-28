import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import RoomSize from '../RoomSize/RoomSize';
import './Chat.css';

let socket;

const Chat = ({location}) => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');
	const [users, setUsers] = useState('');
	const [message, setMessage] = useState('')
	const [messages, setMessages] = useState([])
	const ENDPOINT = 'localhost:9001/'

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
		});

		socket.on("roomData", ({ users }) => {
			setUsers(users);
		});

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
			<div className="smallcontainer">
				<InfoBar room={room}/>
				<Messages messages={messages} name={name}/>
				<Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
				<RoomSize users={users} />
			</div>
		</div>
	)
}

export default Chat
