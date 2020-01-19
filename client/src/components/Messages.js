import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';
const Messages = ({ msgs, name }) => (
  <ScrollToBottom className='container-fluid mt-5 mb-5 w-100 h-100'>
    {msgs &&
      msgs.map((msg, idx) => <Message key={idx} name={name} message={msg} />)}
  </ScrollToBottom>
);
export default Messages;
