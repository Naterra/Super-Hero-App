import React, { Component } from 'react';

// Assets
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import './App.css';

/**  Components  **/
import Layout from '../components/Layout';
import AuthComponent from '../components/AuthComponent';
import ComparisonView from '../components/ComparisonView';

/**  Actions  **/
import { getUserToken } from '../store/actions';

class App extends Component {
	constructor() {
		super();

		this.state = {
			isAuthorized: null
		};

		this.authorizedCallback = this.authorizedCallback.bind(this);
	}
	async componentDidMount() {
		const userToken = await getUserToken();
		if (userToken) {
			this.setState({ isAuthorized: true });
		}
	}
	authorizedCallback() {
		this.setState({ isAuthorized: true });
	}
	render() {
		const { isAuthorized } = this.state;

		return (
			<Layout>
				{!isAuthorized && (
					<div className="row">
						<h4 className="center">Welcome to Super Hero Command Center!</h4>

						<div className="col s6 offset-s3">
							<AuthComponent authorizedCallback={this.authorizedCallback} {...this.props} />
						</div>
					</div>
				)}

				{isAuthorized && <ComparisonView />}
			</Layout>
		);
	}
}

export default App;
