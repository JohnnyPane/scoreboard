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
	final_score: 100
);

Score.create!(
	game_type: 'Ping Pong',
	player_one: 'Coleman',
	player_two: 'JP',
	author_id: 1,
	final_score: 23
);

Score.create!(
	game_type: 'Ping Pong',
	player_one: 'Coleman',
	player_two: 'JP',
	author_id: 1,
	final_score: 87
);

Score.create!(
	game_type: 'Ping Pong',
	player_one: 'Coleman',
	player_two: 'JP',
	author_id: 1,
	final_score: 45
);

Standing.create!(
	player_one: 'Genghis',
	player_two: 'Attila',
	game_type: 'War',
	player_one_wins: 9,
	player_two_wins: 7,
	author_id: 1
);

Standing.create!(
	player_one: 'Genghis',
	player_two: 'Attila',
	game_type: 'Battle',
	player_one_wins: 13,
	player_two_wins: 11,
	author_id: 1
);

Standing.create!(
	player_one: 'Jon Snow',
	player_two: 'Night King',
	game_type: 'Chess',
	player_one_wins: 3,
	player_two_wins: 3,
	author_id: 4
);