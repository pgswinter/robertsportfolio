var React = require('react');
import createReactClass from 'create-react-class'
const master_data = require('../career/master_page/data');

const Home = createReactClass({
	getInitialState(){
		return {
			master_data
		}
	},
	render(){
		let loadHome = this.state.master_data.homes.map(function(home, i){
			return(
				<div key={i}>
					{home.name}
				</div>
			)
		})
		return (
			<div>
				{loadHome}
			</div>
		)
	}

})
export default Home