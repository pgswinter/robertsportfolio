import 'bootstrap/dist/js/bootstrap';

require('../src/style/career/bundle.sass');

require('../public/fonts/segoeui/font.sass');
require('../public/fonts/segoeuib/font.sass');
require('../public/fonts/museo/font.sass');

import React, {Component} from 'react';
import createReactClass from 'create-react-class'
import { render } from 'react-dom'
// First we import some modules...
import { Router, Route, Link, IndexRoute, hashHistory, withRouter } from 'react-router';

// Module import


var AboutUs = () => (
	<div>There is About Us</div>
)
var Campus = () => (
	<div>There is Campus</div>
)
var Life = () => (
	<div>There is Life</div>
)
var Job = () => (
	<div>There is Job</div>
)

const master_data = require('../career/master_page/data');

const MasterPage = withRouter(
	createReactClass({

		getInitialState(){
			return {
				tacos: [
					{ name: 'duck confit' },
					{ name: 'carne asada' },
					{ name: 'shrimp' }
				]
			}
		},
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
			// 	</div>
			// )
			return (
				<div>
					<h1>There is Master Page</h1>
					{this.props.children}
				</div>
			)
		}
	})
)

const Home = createReactClass({
	render(){

		return (
			<div>
				{this.props.params.name}
			</div>
		)
	}
})


render((
  <Router history={hashHistory}>
    <Route path="/" component={MasterPage}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
), document.getElementById('app'))

if(module.hot){
	module.hot.accept();
}