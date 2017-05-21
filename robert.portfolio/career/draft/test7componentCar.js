var React = require('react');
import createReactClass from 'create-react-class'
const master_data = require('../career/master_page/data');

const Car = createReactClass({
	getInitialState(){
		return {
			master_data
		}
	},
	render(){
		let loadCar = this.state.master_data.cars.map(function(car, i){
			return(
				<div key={i}>
					{car.name}
				</div>
			)
		})
		return (
			<div>
				{loadCar}
			</div>
		)
	}

})

export default Car