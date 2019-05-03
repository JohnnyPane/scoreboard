class Api::StandingsController < ApplicationController
	before_action :require_logged_in

	def create
		@standing = current_user.standings.new(standing_params)

		if @standing.save
			render :show
		else
			render json: @standing, status: :unprocessable_entity
		end
	end

	def show
		@standing = Standing.find_by(params[:author_id])
		render :show
	end

	private

	def standing_params
		params.require(:standing).permit(
			:player_one,
			:player_two,
			:player_one_wins,
			:player_two_wins,
			:author_id,
			:game_type
		)
	end

end