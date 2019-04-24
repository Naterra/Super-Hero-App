import React, { Component } from 'react';
import { connect } from 'react-redux';

/**  Actions  **/
import { searchByName } from '../store/actions';


class SearchBox extends Component {
	onChangeEvent(val){
		console.warn("search input changed", val);
		this.props.searchByName(val);
	}
	render() {
        return (<div className="row">
			<div className="input-field col s12">
				<input onChange={e=>this.onChangeEvent(e.target.value)} placeholder="Character Name" id="first_name" type="text" />
				<span className="helper-text">Search by character Name</span>
			</div>
            </div>
		);
	}
}

export default connect(null, { searchByName })(SearchBox);
