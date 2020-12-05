
function dispatchClick() {
	var ev = new MouseEvent('click', {
			'view': window,
			'bubbles': true,
			'cancelable': true,
			'screenX': 100,
			'screenY': 100
	});

	document.dispatchEvent(ev)
}

preventIdleness = () => {
	setInterval(()=>{dispatchClick()}, 2000);
}

window.addEventListener('DOMContentLoaded', () => { preventIdleness() });

window.addEventListener('click', (e) => {
	console.log(`click happened –– type: ${e.type}`);
});