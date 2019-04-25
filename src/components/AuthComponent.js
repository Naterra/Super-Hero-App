import React, { Component } from 'react';

/**  Actions  **/
import { authenticate } from '../store/actions';

/**  Components  **/
import PreloaderSpinner from './PreloaderSpinner';

class AuthComponent extends Component {
	constructor() {
		super();

		this.state = {
			err: null,
			loading: null
		};

		this.tokenRef = React.createRef();
		this.submitToken = this.submitToken.bind(this);
	}

	async submitToken() {
		const input = this.tokenRef.current;
		const token = input.value;

		this.setState({ loading: true, err: false });

		authenticate(token)
			.then(res => {
				this.props.authorizedCallback();
			})
			.catch(err => {
				this.setState({ err: 'Not Authorized' });
			})
			.finally(() => {
				this.setState({ loading: false });
			});
	}

	render() {
		const { err, loading } = this.state;

		return (
			<div className="row">
				<div className="card">
					<div className="card-title center" style={{ padding: '10px 30px 0' }}>
						Please, Log In
					</div>
					<div className="card-content row">
						<div className="col s1">{loading && <PreloaderSpinner />}</div>
						<div className="center col s10 offset-s1">
							<div className="input-field col m8 s12">
								<input ref={this.tokenRef} id="password" type="password" className="validate" />
								<label className="active" htmlFor="password">
									Password
								</label>
								{err && (
									<span className="helper-text red-text left" data-error="wrong" data-success="right">
										Invalid Token
									</span>
								)}
							</div>
							<div className="input-field col m4 s12 ">
								<button className="btn" onClick={this.submitToken}>
									Submit
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AuthComponent;
