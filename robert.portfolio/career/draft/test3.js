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

const master_data = require('../career/master_page/data');

var formatDate = function(date) {
  return date.toLocaleDateString();
}

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

		 addTaco() {
			let name = prompt('taco name?')

			this.setState({
			tacos: this.state.tacos.concat({ name })
		})
		},

		handleRemoveTaco(removedTaco) {
			this.setState({
				tacos: this.state.tacos.filter(function (taco) {
					return taco.name != removedTaco
			})
		})

			this.props.router.push('/')
		},
		render() {
			let links = this.state.tacos.map(function (taco, i) {
			return (
				<li key={i}>
					<Link to={`/taco/${taco.name}`}>{taco.name}</Link>
				</li>
			)
		})
	return (
	<div className="App">
		<button onClick={this.addTaco}>Add Taco</button>
			<ul className="Master">
				{links}
			</ul>
			<div className="Detail">
				{this.props.children && React.cloneElement(this.props.children, {
					onRemoveTaco: this.handleRemoveTaco
				}
			)}
		</div>
	</div>
	)
	}
	})
	
)

const Taco = createReactClass({
	remove(){
		this.props.onRemoveTaco(this.props.params.name)
	},
	render(){
		return (
			<div className="Taco">
				<h1>{this.props.params.name}</h1>
				<button onClick={this.remove}>remove</button>
			</div>
		)
	}
})

render((
  <Router history={hashHistory}>
    <Route path="/" component={MasterPage}>
      <Route path="taco/:name" component={Taco} />
    </Route>
  </Router>
), document.getElementById('app'))

if(module.hot){
	module.hot.accept();
}