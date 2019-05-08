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
		@score = Score.find(params[:id])
		render :show
	end

	def index
		@scores = Score.all.where(author_id: current_user.id)
		render :index
	end

	def update
		@score = Score.find(params[:id])
		if @score.update(score_params)
			render :show
		else
			render @score.errors.full_messages, status: 401
		end
	end

	private 

	def score_params
		params.require(:score).permit(:game_type, :player_one, :player_two, :author_id, :final_score, :player_one_score, :player_two_score)
	end
end 