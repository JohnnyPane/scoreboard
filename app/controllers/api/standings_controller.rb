class Api::StandingsController < ApplicationController
	before_action :require_logged_in

	def index
		@scores = Score.all.where(author_id: current_user.id)
		@titles = @scores.pluck(:game_type, :player_one, :player_two).uniq
		render :index
	end

	private

	def standing_params
		params.require(:score).permit(
			:player_one,
			:player_two,
			:player_one_score,
			:player_two_score,
			:game_type
		)
	end

end

# titles = scores.pluck(:game_type, :player_one, :player_two)
# @standings_tables = titles.uniq