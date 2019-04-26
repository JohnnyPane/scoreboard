json.array! @scores do |score|
	json.partial! 'api/scoreboards/score', score: score
end