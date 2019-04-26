export const fetchScores = () => {
	return $.ajax({
		method: 'GET',
		url: '/api/scores',
	})
};