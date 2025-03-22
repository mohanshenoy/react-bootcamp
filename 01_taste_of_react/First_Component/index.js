class Hello extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello! Mohan Shenoy </h1>
				<h1>Hello! Vinaya Shenoy</h1>
				<h1>Hello! Meghana Shenoy</h1>
				<h1>Hello! Manya Shenoy</h1>
			</div>
		);
	}
}
ReactDOM.render(<Hello />, document.getElementById('root'));




class Hello1 extends React.Component {
	render() {
		return (
			<div>
			<h1>My number is :{3*15}</h1>
		</div>
		);
	}
}
ReactDOM.render(<Hello1 />, document.getElementById('root'));





function getMood(){
	const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid'];
	return moods[Math.floor(Math.random() * moods.length)];
}
class Hello2 extends React.Component {
	render() {
		return (
			<div>
			<h1>my  current mood is ...{getMood()}</h1>
		</div>
		);
	}
}
ReactDOM.render(<Hello2 />, document.getElementById('root'));




//https://blog.logrocket.com/react-conditional-rendering-9-methods/





function getNumber(){
	return Math.floor(Math.random() * 10);
}
class NumPicker extends React.Component {
	render() {
		return (
			<div>
			<h1>your number is  ...{getNumber()}</h1>
		</div>
		);
	}
}
ReactDOM.render(<NumPicker />, document.getElementById('root'));




