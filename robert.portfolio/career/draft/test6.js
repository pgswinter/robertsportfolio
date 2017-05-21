var React = require('react');
var ReactDOM = require('react-dom');

class Clock extends React.Component{

	constructor(props){
		super(props)
		this.state = {date: new Date()}
	}

	componentDidMount(){
		this.timerID = setInterval(
			() => this.tick(),
			1000
		)
	}

	componenWillUnMount(){

		clearInterval(this.timerID)

	}

	tick(){
		this.setState({

			date: new Date()

		})
	}

	render(){
		return(
			<div>
				<h1>Hello World!</h1>
				<p>It is {this.state.date.toLocaleTimeString()}</p>
			</div>
		)
	}

}

ReactDOM.render(
  <Clock />,
  document.getElementById('app')
);

if(module.hot){
	module.hot.accept();
}