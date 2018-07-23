import _ from 'lodash';
import printMe from './print'
function component() {
	var element = document.createElement('div');
	var btn = document.createElement('button')
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello')

	btn.innerHTML = '点我啊 丑逼'
	btn.onclick = printMe
	element.appendChild(btn)
	return element;
}
console.log(1)
var element = component()
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element)
    element = component()
    document.body.appendChild(element);
  })
}