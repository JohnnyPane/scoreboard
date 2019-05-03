export const fetchStandings = standings => {
	return $.ajax({
		method: 'GET',
		url: '/api/standings',
		standings
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