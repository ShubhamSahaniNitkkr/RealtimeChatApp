import React from 'react';
import { Link } from 'react-router-dom';

const infoBar = ({ room }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <a className='navbar-brand text-info text-capitalize ' href='!#'>
        <i className='fas fa-door-open text-info fa-2x'></i> {`${room} Room`}
      </a>
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item active'>
          <Link className='nav-link' to='/'>
            <i className='fas fa-window-close fa-2x text-danger'></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default infoBar;
