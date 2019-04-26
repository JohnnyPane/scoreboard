export const selectAllScores = state => Object.values(state.entities.scores);

export const asArray = ({ scores }) => (
	Object.keys(scores).map(key => benches[key])
);