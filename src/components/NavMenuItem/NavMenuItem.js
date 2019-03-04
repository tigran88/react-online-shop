import React from 'react';
import { NavLink } from 'react-router-dom';

const navMenuItem = (props) => {
  return (
      <li className="ml-3">
          <NavLink to={ props.to } activeClassName="" exact className="text-grey-lightest no-underline hover:underline">
              { props.children }
          </NavLink>
      </li>
  )
};

export default navMenuItem;