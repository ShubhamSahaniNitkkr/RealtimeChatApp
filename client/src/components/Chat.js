import React, { useState, useEffect, useRef } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../components/infoBar';
import Messages from './Messages.js';
import InputBar from '../components/inputBar';

const ENDPOINT = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000';

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    const { name: userName, room: userRoom } = queryString.parse(location.search);
    socketRef.current = io(ENDPOINT);
    setName(userName);
    setRoom(userRoom);

    socketRef.current.emit('onlogin', { name: userName, room: userRoom }, () => {});

    socketRef.current.on('message', msg => {
      setMessages(prev => [...prev, msg]);
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, [location.search]);

  const sendMessage = e => {
    e.preventDefault();
    if (message && socketRef.current) {
      socketRef.current.emit('sendMessage', message, () => setMessage(''));
    }
  };

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
