import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loginstyle from '../css/login.module.css';

const Login = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [alert, setAlert] = useState('');

  return (
    <div
      className={`col-md-12 d-flex justify-content-center ${loginstyle.login_page_back}`}
    >
      <div className='card shadow-sm p-3 mb-5 bg-white rounded col-md-3 '>
        <div className='card-body'>
          <h5 className='card-title text-center'>
            <i className='fas fa-door-closed fa-5x text-info'></i>
          </h5>
          <h5 className='card-title text-center text-primary'>
            Join Chat Rooms
          </h5>
          <hr />
          {alert && (
            <div className='alert alert-danger' role='alert'>
              <span>{alert}</span>
            </div>
          )}
          <div className='form-group text-info'>
            <label htmlFor='username'>
              <i className='fas fa-user-alt fa-lg'></i> Name
            </label>
            <input
              type='text'
              className='form-control '
              id='username'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className='form-group text-success'>
            <label htmlFor='room'>
              <i className='fas fa-door-open text-info fa-lg'></i> Room
            </label>
            <input
              type='text'
              className='form-control'
              id='room'
              value={room}
              onChange={e => setRoom(e.target.value)}
              aria-describedby='roomHelp'
            />
            <small id='roomHelp' className='form-text text-muted'>
              Enter the room you want to join.
            </small>
          </div>

          <Link
            type='submit'
            onClick={e =>
              !name || !room
                ? (e.preventDefault(), setAlert('All Fields are required !'))
                : null
            }
            to={`/chat?name=${name}&room=${room}`}
            className='btn btn-info'
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
