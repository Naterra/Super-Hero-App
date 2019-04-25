import React from 'react';
import ProfileInfoView from './ProfileInfoView';

const CharacterProfile = props => {
	const { mode, comparisonView, setSelectedProfileType } = props;

	const record = mode === 'hero' ? comparisonView.hero : comparisonView.villain;
	const img = record ? record.image.url : mode === 'hero' ? '/img/batman_profile.jpg' : '/img/angry-batman.jpg';
	const isActive = comparisonView.selectedAlignment === mode ? true : false;

	return (
		<div className="profile-card" onClick={e => setSelectedProfileType(mode)}>
			<h5 className="center">{mode === 'hero' ? 'Hero' : 'Villain'}</h5>

			<div className={`image-card center card ${isActive ? 'active' : ''}`}>
				<img src={img} className="responsive-img" />
			</div>

			{record && <ProfileInfoView data={record} />}
		</div>
	);
};

export default CharacterProfile;
