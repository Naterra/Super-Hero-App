import React, { Component } from 'react';
import { connect } from 'react-redux';

/**  Components  **/
import SearchBox from './SearchBox';
import SearchResult from './SearchResult';

/**  Actions  **/
import { setSelectedProfileType } from '../store/actions';

class ComparisonView extends Component {
	constructor() {
		super();
	}
	async componentDidMount() {

	}

	render() {
		const { comparisonView, search } = this.props;
		const currentSearchAlignment = comparisonView.selectedAlignment === "hero" ? "good" :"bad";
		const searchResultData = search.result ? search.result.filter(item=>item.biography.alignment == currentSearchAlignment) :[];


		return (
			<div className="row">


				<div className="col m3">
					<CharacterProfile mode="hero" {...this.props} />
				</div>


				<div className="col m6">
					<h4 className="center">Select Character</h4>
					{!comparisonView.selectedAlignment && !comparisonView.villian && (<p className="center teal-text">Please, select hero or villian</p>)}
					{comparisonView.selectedAlignment && <SearchBox/>}
					<SearchResult records={searchResultData}/>
				</div>

				<div className="col m3">
					<CharacterProfile mode="villian" {...this.props} />
				</div>


			</div>
		);
	}
}

class CharacterProfile extends Component {
	onClickEvent(){
		console.warn("onClickEvent");
	}
	render() {
		const { mode, imgUrl, setSelectedProfileType } = this.props;

		const img = imgUrl ? imgUrl : mode === 'hero' ? '/img/batman_profile.jpg' : '/img/angry-batman.jpg';

		return (
			<div onClick={e=>setSelectedProfileType(mode)}>
				<h5 className="center">{mode === 'hero' ? 'Hero' : 'Villian'}</h5>

				<div className="card">
					<img src={img} className="responsive-img" />
				</div>
			</div>
		);
	}
}

function mapStateToProps({ comparisonView, search }) {
	return { comparisonView, search };
}

export default connect(mapStateToProps, { setSelectedProfileType })(ComparisonView);
