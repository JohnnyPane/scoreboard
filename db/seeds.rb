# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Score.delete_all;
Standing.delete_all;

Score.create!(
	game_type: 'Ping Pong',
	player_one: 'Coleman',
	player_two: 'JP',
	author_id: 1,
	final_score: 100,
	player_one_score: 100,
	player_two_score: 97
);

Score.create!(
	game_type: 'Ping Pong',
	player_one: 'Coleman',
	player_two: 'JP',
	author_id: 1,
	final_score: 23,
	player_one_score: 23,
	player_two_score: 21
);

Score.create!(
	game_type: 'Ping Pong',
	player_one: 'Coleman',
	player_two: 'JP',
	author_id: 1,
	final_score: 87,
	player_one_score: 77,
	player_two_score: 87
);

Score.create!(
	game_type: 'Ping Pong',
	player_one: 'Coleman',
	player_two: 'JP',
	author_id: 1,
	final_score: 45,
	player_one_score: 45,
	player_two_score: 37
);

