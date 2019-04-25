import React, { Component } from 'react';
import { connect } from 'react-redux';

/**  Actions  **/
import Preloader from './Preloader';

/**  Actions  **/
import { searchByName, resetSearchResult } from '../store/actions';

class SearchBox extends Component {
	constructor() {
		super();

		this.state = {
			error: null,
			loading: null,
			typingTimeout: null
		};

		this.onChangeEvent = this.onChangeEvent.bind(this);
		this.fetchData = this.fetchData.bind(this);
	}
	fetchData(keyword) {
		//reset store records to empty list
		this.props.resetSearchResult();

		//change state
		this.setState({
			loading: true,
			error: null
		});

		//search for records
		this.props
			.searchByName(keyword)
			.then(res => {
				if (res.data.err) this.setState({ error: res.data.err });
			})
			.catch(err => {})
			.finally(() => {
				this.setState({ loading: false });
			});
	}
	onChangeEvent(keyword) {
		const { typingTimeout } = this.state;

		if (typingTimeout) {
			clearTimeout(typingTimeout);
		}

		this.setState({
			typingTimeout: setTimeout(() => {
				if (keyword) {
					this.fetchData(keyword);
				} else {
					//reset to empty list
					this.props.resetSearchResult();
				}
			}, 800)
		});
	}
	render() {
		const { error, loading } = this.state;

		return (
			<div className="row">
				<div className="input-field col s12">
					<input onChange={e => this.onChangeEvent(e.target.value)} placeholder="Character Name" id="first_name" type="text" autoComplete="off"/>
					<span className="helper-text">Search by character Name</span>
				</div>
				{error && <p className="center">{error}</p>}
				{loading && <Preloader/>}
			</div>
		);
	}
}

export default connect(null, { searchByName, resetSearchResult })(SearchBox);
