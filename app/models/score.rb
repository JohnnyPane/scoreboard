class Score < ApplicationRecord
	validates :game_type, :author_id, presence: true

	belongs_to :author,
		primary_key: :id,
		foreign_key: :author_id,
		class_name: :User

	belongs_to :standing, optional: true

	def self.head_to_head_player_standings
		all.to_a.group_by(&:game_key).map do |game_key, scores|
			game_type, player_one, player_two = game_key.split("_")
			
			{
				game_type: game_type.split.map(&:capitalize).join(' '),
				player_one: player_one.capitalize,
				player_two: player_two.capitalize,
				stats: {
					total_games: scores.length,
					player_one_wins: scores.select { |score| score.winner.downcase == player_one }.length,
					player_two_wins: scores.select { |score| score.winner.downcase == player_two }.length,
				},
				scores: {
					player_one_total_points: scores.map { |score| score.player_one.downcase == player_one ? score.player_one_score : score.player_two_score }.reduce(:+),
					player_two_total_points: scores.map { |score| score.player_two.downcase == player_two ? score.player_two_score : score.player_one_score }.reduce(:+),
					player_one_points_collection: scores.map { |score| score.player_one.downcase == player_one ? score.player_one_score : score.player_two_score },
					player_two_points_collection: scores.map { |score| score.player_two.downcase == player_two ? score.player_two_score : score.player_one_score }
				},
				date: scores
			}
		end
	end


	def players_key
		[player_one, player_two].map(&:downcase).sort().join("_")
	end

	def game_key
		[game_type, players_key].map(&:downcase).join("_")
	end

	def winner
		player_one_score > player_two_score ? player_one : player_two
	end
end
