import React from 'react';
import ReactDOM from 'react-dom';
import RootPage from '!!tee-loader?after!babel-loader!tee-loader?before!./RootPage';

ReactDOM.render(
  <div><RootPage /></div>,
  document.getElementById('root')
);
