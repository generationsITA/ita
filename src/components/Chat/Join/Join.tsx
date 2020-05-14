import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Chat from '../index';

const Join = () => {
    const [ name, setName ] = useState('');
    const [ input, setInput ] = useState('');

    const [ room, setRoom ] = useState('general');




    const joinForm = () => {
      return (
        <div className="join-container">
            <div className="join-inner">
                  <h1 className="heading">Join</h1>
                  <div>
                  <input 
                    placeholder="Name" 
                    className="join-input" 
                    type="text" 
                    value={input}
                    onChange={(event) => setInput(event.target.value)} />
                </div>
                  <button type="submit" onClick={(event) => {setName(input)}}>Sign In</button>

              </div>
            </div>
      )
    }
    
    return (
      <div>
          { name ? <Chat name={name} /> : joinForm() }
      </div>
        
    )
};

export default Join;