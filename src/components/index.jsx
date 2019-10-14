import React from 'react';

const HelloWorld = ({ children }) => {
  const html = children ? <span>{children}</span> : false;
  return (
    <div>
      <h1>Hello World!</h1>
      {html}
    </div>
  );
};
export default HelloWorld;
