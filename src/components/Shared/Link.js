import React from 'react';

const Link = ({ linkText, onClick }) => (
  <button className="text-red-600 hover:text-red-900 text-xs" onClick={onClick}>
    {linkText}
  </button>
);

export { Link };
