import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../components/infoBar';
import Messages from './Messages.js';
import InputBar from '../components/inputBar';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState('');

  const ENDPOINT = 'https://realtime-chat-app-ss.herokuapp.com/cd';
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);
    socket.emit('onlogin', { name, room }, () => {});
    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', message => [setMessages([...messages, message])]);
  }, [messages]);

  const sendMessage = e => {
    e.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  console.log('ye hit ', message, messages);

  return (
    <React.Fragment>
      <InfoBar room={room} />
      <Messages msgs={messages} name={name} />
      <InputBar
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </React.Fragment>
  );
};

export default Chat;
