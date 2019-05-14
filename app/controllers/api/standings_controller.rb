class Api::StandingsController < ApplicationController
	before_action :require_logged_in

	def index
		@standings = Score.where(author_id: current_user).head_to_head_player_standings
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
