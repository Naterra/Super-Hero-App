export const isEmptyProfileData = data => {
	const noDataRule = ['null', '-', ''];
	if (noDataRule.includes(data)) {
		return false;
	}else{
		return true;
	}
};

export const getProfileExistingArrayVal = array => {
    const noDataRule = ['null', '-', ''];
    let res =null;
    for(let item of array) {
        let itemVal = item.replace(/[lb|kg]/g,'');
        itemVal = itemVal.trim();
        if( !noDataRule.includes(itemVal) ) res = item;
     }
    return res;
};
