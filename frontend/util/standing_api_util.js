export const fetchStandings = data => {
	return $.ajax({
		method: 'GET',
		url: '/api/standings',
		data
	})
};

export const fetchStanding = id => {
	return $.ajax({
		method: 'GET',
		url: `api/standings/${id}`
	})
};
