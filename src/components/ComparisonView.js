import React, { Component } from 'react';
import { connect } from 'react-redux';

/**  Components  **/
import SearchBox from './SearchBox';
import SearchResult from './SearchResult';
import CharacterProfile from './CharacterProfile';

/**  Actions  **/
import { setSelectedProfileType, setHero, setVillain } from '../store/actions';

class ComparisonView extends Component {
	constructor() {
		super();
	}

	render() {
		const { comparisonView, search } = this.props;
		const currentSearchAlignment = comparisonView.selectedAlignment === 'hero' ? 'good' : 'bad';
		const searchResultData = search.result ? search.result.filter(item => item.biography.alignment == currentSearchAlignment) : [];

		return (
			<div className="row">
				<div className="col m4">
					<CharacterProfile mode="hero" {...this.props} />
				</div>

				<div className="col m4">
					<h1 className="center">VS</h1>
					<h5 className="center">Select Character</h5>
					{!comparisonView.selectedAlignment && !comparisonView.villain && <p className="center teal-text">Please, select hero or villain</p>}
					{comparisonView.selectedAlignment && <SearchBox />}
					<SearchResult records={searchResultData} {...this.props} />
				</div>

				<div className="col m4">
					<CharacterProfile mode="villain" {...this.props} />
				</div>
			</div>
		);
	}
}



function mapStateToProps({ comparisonView, search }) {
	return { comparisonView, search };
}

export default connect(mapStateToProps, { setSelectedProfileType, setHero, setVillain })(ComparisonView);
