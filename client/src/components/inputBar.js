import React from 'react';

const inputBar = ({ message, setMessage, sendMessage }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light p-2 fixed-bottom'>
      <input
        type='text'
        style={{ textOverflow: 'ellipsis' }}
        placeholder='Enter You Message Here and Press Enter !'
        className='form-control w-100'
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyPress={e => (e.key === 'Enter' ? sendMessage(e) : null)}
      />
    </nav>
  );
};

export default inputBar;
