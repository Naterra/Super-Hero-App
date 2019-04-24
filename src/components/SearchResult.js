import React, { Component } from 'react';

class SearchResult extends Component {
	render() {
		const { records } = this.props;

        return (<div className="row">
				{records && records.map((item, i)=>{
					return (<div key={i} className="card horizontal">
						<div className="card-image">
							<img className="responsive-img" src={item.image.url} style={{height: "90px"}} />
						</div>

						<div></div>
						<div>name:{item.name}</div>
						<div>alignment:{item.biography.alignment}</div>

					</div>);
				})}
            </div>
		);
	}
}

export default SearchResult;
