class JSXDemo extends React.Component {
	render() {
		return (
			<div>
				<h1>My Image</h1>
				<img 
					src="https://media.istockphoto.com/id/2153261979/photo/green-residential-area.jpg?s=2048x2048&w=is&k=20&c=D9RjScabESi4nNbRPsOIJLXa4DmyTZFkRgfesGvzWDQ="
					hieght="1200px"
					width="1200px"
				/>
			</div>
		);
	}
}
ReactDOM.render(<JSXDemo />, document.getElementById('root'));


class JSXDemo extends React.Component {
	render() {
		return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello world !!!!!!!!!!!"), /*#__PURE__*/React.createElement("p", null, "lorem loremlorem lorem lorem lorem lorem "));
	}
}
ReactDOM.render(<JSXDemo />, document.getElementById('root'));