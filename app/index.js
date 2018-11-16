import React from 'react';
import ReactDOM from 'react-dom';
import RootPage from '!!tee-loader?after!babel-loader!tee-loader?before!./RootPage';

let appRootEle = document.getElementsByTagName('applicationroot')[0];
if(!appRootEle){
  appRootEle = document.createElement('applicationroot');
  document.body.appendChild(appRootEle);
}

ReactDOM.render(
  <RootPage />,
  appRootEle
);
