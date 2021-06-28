import React from 'react';
import onlineIcon from '../../icons/onlineIcon.svg';
import './RoomSize.css';

const RoomSize = ({ users }) => {
	return (
  <div className="RoomSize">
    {
      users
        ? (
          <div className="currently-online">
            <div className="activeContainer">
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                   	{name + " "}
                    <img src={onlineIcon} className="online" alt="Online Icon"/> 
                  </div>
                ))}
            </div>
          </div>
        )
        : null
    }
  </div>
);
// (
// 		<div>
// 			<p>Hello, laverne.</p>
// 		</div>
// 	)
}

export default RoomSize
