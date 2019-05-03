@standings.each do |standing|
	json.set! standing.id do
		json.partial! 'standing', standing: standing
	end
end