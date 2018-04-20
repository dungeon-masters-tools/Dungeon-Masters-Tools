import _ from 'lodash';
import './style.css';
import Icon from './unnamed.jpg';
import Data from './projects.json';


function component() {
    var element = document.createElement('div');
    // Lodash, now imported by this script
    element.innerHTML = _.join(['<strong>test</strong>', 'workflow'], ' ');
    element.classList.add('hello');


   // Add the image to our existing div.   
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
  
    console.log(Data);

    return element;
  }
  
  document.body.appendChild(component());