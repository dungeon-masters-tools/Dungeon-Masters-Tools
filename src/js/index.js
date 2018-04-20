import React from "react";
import ReactDOM from "react-dom";
// import _ from 'lodash';

import '../scss/global.scss';
import Icon from '../unnamed.jpg';
import Data from '../projects.json';

function component() {
    const element = document.createElement('div');
    element.setAttribute("id", "app");
    console.log(Data);

    return element;
  }
  
document.body.appendChild(component());

const Index = () => {
  return (<div>Hello you fuck!</div>);
};

ReactDOM.render(<Index />, document.getElementById("app"));