// function getNumber(){
// 	return Math.floor(Math.random() * 10);
// }
// class Hello extends React.Component {
// 	render() {
// 		const num = getNumber();
// 		return (
// 			<div>
// 				<h1>your number is  ...{num}</h1>
				
// 				<h2>{ num===7 ? 'You Won!': 'You Lose'}</h2>

// 				{num === 7 && <img src="https://media.giphy.com/media/nXxOjZrbnbRxS/giphy.gif" />}
// 			</div>
// 		);
// 	}
// }
// ReactDOM.render(<Hello />, document.getElementById('root'));


function getNumber(){
	return Math.floor(Math.random() * 10);
}
class Hello extends React.Component {
	render() {
		const num = getNumber();
		let msg;
		if	(num === 1){
			msg = <div>
					<h2>You Won!</h2>
					<img src="https://media.giphy.com/media/nXxOjZrbnbRxS/giphy.gif" />
				  </div>
		}	else {	
			msg = <h2>You Lose</h2>
		}
		return (
			<div>
				<h1>your number is  ...{num}</h1>
				{msg}
			</div>
		);
	}
}
ReactDOM.render(<Hello />, document.getElementById('root'));



