import 'bootstrap/dist/js/bootstrap';

require('../src/sass/bundle.sass');

require('../public/fonts/segoeui/font.sass');
require('../public/fonts/segoeuib/font.sass');
require('../public/fonts/museo/font.sass');

import React, {Component} from 'react';
import createReactClass from 'create-react-class';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, withRouter } from 'react-router';

const master_data = require('../data/portfolio');

const MasterPage = withRouter(
	createReactClass({
		render(){
			return(
				<div>
					<Header master_page={master_data.master_page}/>
					<div className="body-content">{this.props.children}</div>
					<Footer master_page={master_data.master_page}/>
				</div>
			)
		}
	})
)

var Header = function(){

	return(

		<div>
			
			<div className="top-head">
				<div className="logo"></div>
				<div className="nav-wrapper">
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<div className="social-network-wrapper"></div>
			</div>

		</div>

	)

}

var Footer = function(){

	return(

		<div>
			
			<div className="footer">
				<div className="email-wrapper"></div>
				<div className="social-network-wrapper"></div>
				<div className="copyright"></div>
			</div>

		</div>

	)

}

if(module.hot){
	module.hot.accept();
}