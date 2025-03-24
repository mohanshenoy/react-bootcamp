class JSXDemo extends React.Component {
	render() {
		return (
			<div>
				<p> my number is {2*4} </p>
			</div>
		);
	}
}
ReactDOM.render(<JSXDemo />, document.getElementById('root'));


function getMood(){
	const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid'];
	return moods[Math.floor(Math.random() * moods.length)];
}
class Hello3 extends React.Component {
	render() {
		return (
			<div>
			<h1>my  current mood is ...{getMood()}</h1>
		</div>
		);
	}
}
ReactDOM.render(<Hello3 />, document.getElementById('root'));

function getNumber(){
	return Math.floor(Math.random() * 10);
}
class Hello4 extends React.Component {
	render() {
		return (
			<div>
			<h1>your number is  ...{getNumber()}</h1>
		</div>
		);
	}
}
ReactDOM.render(<Hello4 />, document.getElementById('root'));




