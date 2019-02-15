import React from 'react';

const navMenuItem = (props) => {
  return (
      <li className="ml-3">
          <a href="#" className="text-grey-lightest no-underline hover:underline">
              {props.children}
          </a>
      </li>
  )
};

export default navMenuItem;