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
            <i className='fas fa-sign-in-alt fa-3x text-primary'></i>
          </h5>
          {alert && (
            <div class='alert alert-danger' role='alert'>
              <span>{alert}</span>
            </div>
          )}
          <div className='form-group'>
            <label htmlFor='username'>Name</label>
            <input
              type='text'
              className='form-control'
              id='username'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='room'>Room</label>
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
            to={`/chat?${name}&${room}`}
            className='btn btn-primary'
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
