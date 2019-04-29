class Api::ScoresController < ApplicationController
	def create
		@score = Score.new(score_params)

		@score.author_id = current_user.id

		if @score.save
			render :show
		else
			render @score.errors.full_messages, status: 401
		end
	end

	def show
		@score = Score.find_by(params[:id])
		render :show
	end

	def index
		@score = Score.all
		render :index
	end

	private 

	def score_params
		params.require(:score).permit(:game_type, :player_one, :player_two, :author_id)
	end
end 