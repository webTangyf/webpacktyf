// log
import './index.scss';
function getComponent() {
	var element = document.createElement('div')
	element.innerHTML = 'pageb'
	element.className = 'hello'
	return element
}
document.body.appendChild(getComponent())
