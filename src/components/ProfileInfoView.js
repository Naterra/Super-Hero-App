import React from 'react';

/**  Components  **/
import Tabs from './Tabs';

/**  Utils  **/
import { getProfileExistingArrayVal, isEmptyProfileData } from '../utils';

const ProfileInfoView = props => {
	const { data } = props;
	const tabId = data.id;

	return (
		<div>
			<h5 className="blue-text text-darken-2 center">{data.name}</h5>
			<Tabs id={tabId} menuList={['Pow', 'Bio', 'Appearance', 'Work', 'Connections']}>
				<div id={`tab${tabId}-1`} className="col s12">
					<ProfileInfoDetail label="Intelligence" value={data.powerstats.intelligence} />
					<ProfileInfoDetail label="Strength" value={data.powerstats.strength} />
					<ProfileInfoDetail label="Speed" value={data.powerstats.speed} />
					<ProfileInfoDetail label="Durability" value={data.powerstats.durability} />
					<ProfileInfoDetail label="Power" value={data.powerstats.power} />
					<ProfileInfoDetail label="Combat" value={data.powerstats.combat} />
				</div>
				<div id={`tab${tabId}-2`} className="col s12">
					<ProfileInfoDetail label="Full Name" value={data.biography['full-name']} />
					<ProfileInfoDetail label="Alter Egos" value={data.biography['alter-egos']} />
					<ProfileInfoDetail label="Aliases" value={data.biography.aliases.join(', ')} />
					<ProfileInfoDetail label="Place of birth" value={data.biography['place-of-birth']} />
					<ProfileInfoDetail label="First appearance" value={data.biography['first-appearance']} />
					<ProfileInfoDetail label="Publisher" value={data.biography.publisher} />
					<ProfileInfoDetail label="Alignment" value={data.biography.alignment} />
				</div>

				<div id={`tab${tabId}-3`} className="col s12">
					<ProfileInfoDetail label="Gender" value={data.appearance.gender} />
					<ProfileInfoDetail label="Race" value={data.appearance.race} />
					<ProfileInfoDetail label="Height" value={data.appearance.height} />
					<ProfileInfoDetail label="Weight" value={data.appearance.weight} />
					<ProfileInfoDetail label="Eye color" value={data.appearance['eye-color']} />
					<ProfileInfoDetail label="Hair color" value={data.appearance['hair-color']} />
				</div>
				<div id={`tab${tabId}-4`} className="col s12">
					<ProfileInfoDetail label="Occupation" value={data.work.occupation} />
					<ProfileInfoDetail label="Base" value={data.work.base} />
				</div>
				<div id={`tab${tabId}-5`} className="col s12">
					<ProfileInfoDetail label="Group affiliation" value={data.connections['group-affiliation']} />
					<ProfileInfoDetail label="Relatives" value={data.connections.relatives} />
				</div>
			</Tabs>
		</div>
	);
};

const ProfileInfoDetail = props => {
	let { label, value } = props;

	if (typeof value === 'string') {
		const isValid = isEmptyProfileData(value);
		if (!isValid) value = <span className="no-data-val">No Data</span>;
	} else if (typeof value === 'object') {
		value = getProfileExistingArrayVal(value);
	}

	return (
		<div>
			<span className="d-title">{label}:</span>
			{value}
		</div>
	);
};

export default ProfileInfoView;
