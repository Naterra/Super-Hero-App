import React, { Component } from 'react';

import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

/**  Components  **/
import Layout from '../components/Layout';
import AuthComponent from '../components/AuthComponent';

/**  Actions  **/
import { getUserToken } from '../store/actions';

class App extends Component {
	constructor(){
		super();

		this.state={
			isAuthorized:null
		}
	}
	async componentDidMount(){
		const userToken = await getUserToken();
		console.log("userToken", userToken);
		if(userToken){
			this.setState({isAuthorized:true});
		}
		// const isAuthorized =  userToken.token ? true:false;


	}
	render() {
		const {isAuthorized} = this.state;
		console.log("App render", this.state);
		console.log("isAuthorized", isAuthorized);


		return (
			<Layout>
				{!isAuthorized && (<div>
					<h4>erf Welcome to Super Hero Command Center!</h4>

					<div style={{ marginTop: '100px' }}>
						<AuthComponent {...this.props} />
					</div>
				</div>)}

				{isAuthorized && (<div>
					hello user
				</div>)}

			</Layout>
		);
	}
}

export default App;
