import React from 'react'
import './Input.css'

function Input({message, setMessage, sendMessage}) {
	return (
		<div className="inputContainer">
			<input 
				className="input"
				type="text"
				placeholder="Type a message..."
				value={message}
				onChange={(event) => setMessage(event.target.value)}
				onKeyPress = { event => event.key === 'Enter' ? sendMessage(event) : null}
				autoFocus
			/>
			<button className="is-light button sendButton" onClick={(event) => sendMessage(event)}>Send</button>
		</div>
	)
}

export default Input
