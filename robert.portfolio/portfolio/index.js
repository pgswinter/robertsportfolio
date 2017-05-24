import 'bootstrap/dist/js/bootstrap';

require('../src/sass/bundle.sass');

require('../public/fonts/segoeui/font.sass');
require('../public/fonts/segoeuib/font.sass');
require('../public/fonts/museo/font.sass');

import React, {Component} from 'react';
import createReactClass from 'create-react-class';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, withRouter } from 'react-router';

// Module import
import home from './modules/home';
import blog from './modules/blog';
import contact from './modules/contact';
import pages from './modules/pages';
import portfolio from './modules/portfolio';

const master_data = require('../data/portfolio');

const MasterPage = withRouter(
	createReactClass({
		render(){
			return(
				<div>
					<Header master_page={master_data.master_page}/>
					<div className="body__content">{this.props.children}</div>
					<Footer master_page={master_data.master_page}/>
				</div>
			)
		}
	})
)

var Header = function(props){
	var componentNav = props.master_page.navigation.map(function(item ,i){
		return(
			<div className="nav__header">
				<ul>
					<li><Link to={item.page}>{item.page}</Link></li>
				</ul>
			</div>
		)
	})
	var componentHeaderLink = props.master_page.links.map(function(item, i){
		return(
			<div className="sub_header__horizontal_links">
				<ul>
					<li>{item.link}</li>
				</ul>
			</div>
		)
	})
	return(

		<div>
			<header className="header master_page__header">
				<div className="sub_header">
					<div className="sub_header__logo">
						<a href=""></a>
					</div>
				</div>
				{componentNav}
				<div className="sub_header">
					{componentHeaderLink}
				</div>
			</header>

		</div>

	)

}

var Footer = function(props){
	var componentFooterLink = props.master_page.links.map(function(item, i){
		return(
			<div className="sub_footer__horizontal_links">
				<ul>
					<li>{item.link}</li>
				</ul>
			</div>
		)
	})
	return(

		<div className="footer master_page__footer">
			<div className="sub_footer__contact">
				<a href=""><i className="fa fa-envelope"></i></a>
			</div>
			{componentFooterLink}
			<div className="sub_footer copyright">
				{props.master_page.copyright.text}
			</div>
			
		</div>

	)

}

render((
	<Router history={hashHistory}>
		<Route path="/" component={MasterPage}>
			<IndexRoute component={home} />
			<Route path="home" component={home} />
			<Route path="portfolio" component={portfolio} />
			<Route path="contact" component={contact} />
			<Route path="pages" component={pages} />
			<Route path="blog" component={blog} />
		</Route>
	</Router>
),document.getElementById('app'))

if(module.hot){
	module.hot.accept();
}