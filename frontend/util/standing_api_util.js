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

export const createStanding = standing => {
	return $.ajax({
		method: 'POST',
		url: '/api/standings',
		data: { standing }
	})
};