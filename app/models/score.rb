 class Score < ApplicationRecord
	validates :game_type, :author_id, presence: true

	belongs_to :author,
		primary_key: :id,
		foreign_key: :author_id,
		class_name: :User
		
end