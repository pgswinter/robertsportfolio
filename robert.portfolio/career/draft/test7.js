var React = require('react');
var ReactDOM = require('react-dom');
import createReactClass from 'create-react-class'
import { Router, Route, Link, IndexRoute, hashHistory, withRouter } from 'react-router';

import Home from './test7componentHome';
import Car from './test7componentCar';

const master_data = require('../career/master_page/data');

const CenterData = withRouter(
	createReactClass({

		// getInitialState(){
		// 	return {
		// 		tacos: []
		// 	}
		// },
		// getTaco(){
		// 	this.setState({
		// 		tacos: [
		// 			{ name: 'duck confit' },
		// 			{ name: 'carne asada' },
		// 			{ name: 'shrimp' }
		// 		]
		// 	})
		// },
		render(){
			// let loadTaco = this.state.tacos.map(function(taco, i){
			// 	return(
			// 		<div>
			// 			{taco.name}
			// 		</div>
			// 	)
			// })
			// return (
			// 	<div>
			// 		{loadTaco}
			// 		<GetCenterData data_load="There is data from center"/>
			// 	</div>
			// )

			// let fn = child => React.cloneElement(child, this.props.taco.name)
			// let children = React.Children.map(this.props.children)
			// let chilrenWithProps = React.cloneElement(this.props.children, this.props)
			return (
				<div>
					{this.props.children}
				</div>
			)
		}
	})
)

// const GetCenterData =  createReactClass({

// 	render(){
// 		return <div>{this.props.data_load}</div>
// 	}

// })

// const Home = createReactClass({
// 	getInitialState(){
// 		return {
// 			master_data
// 		}
// 	},
// 	render(){
// 		let loadHome = this.state.master_data.homes.map(function(home, i){
// 			return(
// 				<div key={i}>
// 					{home.name}
// 				</div>
// 			)
// 		})
// 		return (
// 			<div>
// 				{loadHome}
// 			</div>
// 		)
// 	}

// })

// const Car = createReactClass({
// 	getInitialState(){
// 		return {
// 			master_data
// 		}
// 	},
// 	render(){
// 		let loadCar = this.state.master_data.cars.map(function(car, i){
// 			return(
// 				<div key={i}>
// 					{car.name}
// 				</div>
// 			)
// 		})
// 		return (
// 			<div>
// 				{loadCar}
// 			</div>
// 		)
// 	}

// })

// function ListNumberRender(props){
// 	return <div>{props.value}</div>	
// }

// function ListNumber(props){
// 	const cars = props.data.cars
// 	// const listItems = tacos.map((taco,index)=><div key={index} >{taco.name}</div>)
// 	const listItems = cars.map((car,index)=><ListNumberRender key={index} value={car.name}/>)
// 	return(
// 		<div>{listItems}</div>
// 	)
// }

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={CenterData}>
			<IndexRoute component={Home} />
			<Route path="car" component={Car} />
		</Route>
	</Router>,document.getElementById('app')
)

if(module.hot){
	module.hot.accept();
}