import React, { Component } from 'react';

/**  Actions  **/
import { getAvgPower } from '../store/actions';

class SearchResult extends Component {
	constructor() {
		super();
		this.onClickEvent = this.onClickEvent.bind(this);
		this.recordsBlock = this.recordsBlock.bind(this);
	}
	onClickEvent(record) {
		const { records, comparisonView, setHero, setVillain } = this.props;
		if (comparisonView.selectedAlignment == 'hero') {
			setHero(record);
		} else {
			setVillain(record);
		}
		console.warn('onClickEvent', record);
	}
	recordsBlock() {
		const { records } = this.props;

		return (
			<div>
				{records &&
					records.map((item, i) => {
						return <SearchResultItem onClickEvent={this.onClickEvent} key={i} data={item} />;
					})}
			</div>
		);
	}
	render() {
		const { records, comparisonView } = this.props;
		console.error('SearchResult', this.props);
		const title = comparisonView.selectedAlignment === 'hero' ? 'List of Heroes' : comparisonView.selectedAlignment === 'villain' ? 'List of Villains' : '';

		return (
			<div>
				{records.length > 0 && <h5>{title}</h5>}
				<div style={{ overflow: 'scroll', height: '400px', padding: '0 2px' }}>{records.length > 0 && this.recordsBlock()}</div>
			</div>
		);
	}
}

const SearchResultItem = props => {
	const { data, onClickEvent } = props;
	const avgPow = getAvgPower(data.powerstats);

	return (
		<div className="card horizontal" onClick={e => onClickEvent(data)}>
			<div className="card-image">
				<img className="responsive-img" src={data.image.url} style={{ height: '90px' }} />
			</div>
			<div className="horisontal-card-content">
				<div>{data.name}</div>
				<div>Average power:{avgPow}</div>
			</div>
		</div>
	);
};

export default SearchResult;
