import React from 'react';

var HelloWorld = function HelloWorld(_ref) {
  var children = _ref.children;
  var html = children ? React.createElement("span", null, children) : false;
  return React.createElement("div", null, React.createElement("h1", null, "Hello World!"), children);
};

export default HelloWorld;