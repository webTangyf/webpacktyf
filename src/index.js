import _ from 'lodash';
import './assest/css/index.css';
import szlicon from './assest/img/logo.png';
import xmlDate from './index.xml';
function component() {
var element = document.createElement('div');

// Lodash, now imported by this script
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello')

	var icon = new Image();
	icon.src = szlicon;
	element.appendChild(icon);
	return element;
}
console.log(xmlDate)

document.body.appendChild(component());