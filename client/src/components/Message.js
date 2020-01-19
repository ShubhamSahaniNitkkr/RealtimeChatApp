import React from 'react';

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();
  if (user === trimmedName) isSentByCurrentUser = true;
  return (
    <div
      className={`card col-md-3 shadow-sm p-3 mb-5 bg-white rounded text-info ${
        isSentByCurrentUser ? 'ml-auto' : null
      }`}
    >
      <div className='card-body'>
        <h5 className='card-title'>
          <i
            className={`fas ${isSentByCurrentUser ? 'fa-user' : 'fa-user-tie'}`}
          ></i>{' '}
          &nbsp;{trimmedName}
        </h5>
        <p className='card-text text-primary'>{text}</p>
      </div>
    </div>
  );
};
export default Message;
