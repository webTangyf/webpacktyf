// async function getComponent() {
// 	var element = document.createElement('div');
// 	const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
// 	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
// 	return element;
// }


// getComponent().then(component => {
//   document.body.appendChild(component);
// })
import _ from 'lodash'
console.log(_)
function getComponent() {
	var element = document.createElement('div');
	var btn = document.createElement('button');
	btn.innerHTML = '点击我懒加载js';
	btn.onclick = e => import(/* webpackChunkName: "print" */ './print')
		.then(mdu => {
			mdu.default && mdu.default()
		})
	element.appendChild(btn)
	return element;
}

document.body.appendChild(getComponent());
