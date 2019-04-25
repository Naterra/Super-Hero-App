import React, { Component } from 'react';

class Tabs extends React.Component {
	constructor(props) {
		super(props);
		this.tabRef = React.createRef();
		this.tabsInstance = null;
	}

	componentDidMount() {
		const { id } = this.props;
		const tabsEl = this.tabRef.current;
		this.tabsInstance = window.M.Tabs.init(tabsEl, {});
	}

	render() {
		const { id, menuList, children } = this.props;

		return (
			<div className="row">
				<div className="col s12 tab-menu">
					<ul id={id} ref={this.tabRef} className="tabs tabs-fixed-width">
						{menuList.map((item, i) => {
							return (
								<li key={i} className="tab">
									<a className={i == 0 ? 'active' : ''} href={`#tab${id}-${i + 1}`}>
										{item}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
				{children}
			</div>
		);
	}
}

export default Tabs;
