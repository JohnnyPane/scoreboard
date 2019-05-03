class Standing < ApplicationRecord
	validates :player_one, :player_two, :game_type, presence: true

	has_many :scores

	belongs_to :author,
		primary_key: :id,
		foreign_key: :author_id,
		class_name: :User
end