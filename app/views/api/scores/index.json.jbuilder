@scores.each do |score|
	json.set! score.id do
		json.partial! 'score', score: score
	end
end
