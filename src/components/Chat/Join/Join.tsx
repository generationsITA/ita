import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Chat from '../index';

const Join = () => {
    const [ name, setName ] = useState('');
    const [ room, setRoom ] = useState('general');

    
    return (
        <div className="join-container">
      <div className="join-inner">
        <h1 className="heading">Join</h1>
        <div>
          <input 
            placeholder="Name" 
            className="join-input" 
            type="text" 
            onChange={(event) => setName(event.target.value)} />
        </div>
        {/* <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div> */}
         {/* <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link> */}
        <Link onClick={e => (!name) ? e.preventDefault() : null} to={`/tools/chat/${name}/${room}`}>
          <button type="submit">Sign In</button>
        </Link>

        <Chat />
      </div>
    </div>
    );
};

export default Join;