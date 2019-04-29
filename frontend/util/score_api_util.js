export const fetchScores = data => {
	return $.ajax({
		method: 'GET',
		url: '/api/scores',
		data
	})
};

export const fetchScore = id => {
	return $.ajax({
		method: 'GET',
		url: `/api/scores/${id}`
	})
};

export const createScore = scoreForm => {
	return $.ajax({
		method: 'POST',
		url: '/api/scores',
		data: scoreForm,
		contentType: false,
		processData: false
	})
};