export const selectAllScores = state => Object.values(state.entities.scores);

export const selectScore = ({ scores }, scoreId) => {
	return scores[scoreId];
};

export const asArray = ({ scores }) => (
	Object.keys(scores).map(key => scores[key])
);
