import React from 'react';

const Message = ({ message: { user, text }, name }) => {
  const trimmedName = name.trim().toLowerCase();
  const isSentByCurrentUser = user.trim().toLowerCase() === trimmedName;

  return (
    <div
      className={`card col-md-3 shadow-sm p-3 mb-3 bg-white rounded text-info message-card ${
        isSentByCurrentUser ? 'ml-auto' : ''
      }`}
    >
      <div className='card-body'>
        <h5 className='card-title'>
          <i
            className={`fas ${isSentByCurrentUser ? 'fa-user' : 'fa-user-tie'}`}
          ></i>{' '}
          &nbsp;{user}
        </h5>
        <p className='card-text text-primary'>{text}</p>
      </div>
    </div>
  );
};

export default Message;
