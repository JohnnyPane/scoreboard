# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Score.delete_all;
Standing.delete_all;
User.delete_all;

User.create!(
	username: "guest",
	password: "password",
	email: "guest@guest.guest",
	id: 1
);

User.create!(
	username: "ColemanOP",
	password: "coleman",
	email: "cole@cole.cole",
	id: 2
);

User.create!(
	username: "genghis",
	password: "greatkhan",
	email: "mongolian@conqueror.com",
	id: 3
);

User.create!(
	username: "Groucho",
	password: "harpoM",
	email: 'marx@brother.net',
	id: 4,
);

User.create!(
	username: "MCurie",
	password: "genius",
	email: "nobel@prize.uk",
	id: 5
);

Score.create!(
	game_type: 'Ping Pong',
	player_one: 'guest',
	player_two: 'ForrestGump',
	author_id: 1,
	final_score: 21,
	player_one_score: 17,
	player_two_score: 21
);

Score.create!(
	game_type: 'Ping Pong',
	player_one: 'guest',
	player_two: 'ForrestGump',
	author_id: 1,
	final_score: 21,
	player_one_score: 21,
	player_two_score: 17
);

Score.create!(
	game_type: 'Ping Pong',
	player_one: 'guest',
	player_two: 'ForrestGump',
	author_id: 1,
	final_score: 21,
	player_one_score: 13,
	player_two_score: 21
);

Score.create!(
	game_type: 'Ping Pong',
	player_one: 'guest',
	player_two: 'ForrestGump',
	author_id: 1,
	final_score: 21,
	player_one_score: 19,
	player_two_score: 21
);

Score.create!(
	game_type: 'Ping Pong',
	player_one: 'guest',
	player_two: 'ForrestGump',
	author_id: 1,
	final_score: 21,
	player_one_score: 21,
	player_two_score: 3
);

Score.create!(
	game_type: 'Darts',
	player_one: 'guest',
	player_two: 'Bullwinkle',
	author_id: 1,
	final_score: 301,
	player_one_score: 301,
	player_two_score: 287
);

Score.create!(
	game_type: 'Darts',
	player_one: 'guest',
	player_two: 'Bullwinkle',
	author_id: 1,
	final_score: 301,
	player_one_score: 301,
	player_two_score: 297
);

Score.create!(
	game_type: 'Darts',
	player_one: 'guest',
	player_two: 'Bullwinkle',
	author_id: 1,
	final_score: 301,
	player_one_score: 247,
	player_two_score: 301
);

Score.create!(
	game_type: 'Darts',
	player_one: 'guest',
	player_two: 'Bullwinkle',
	author_id: 1,
	final_score: 301,
	player_one_score: 301,
	player_two_score: 291
);

Score.create!(
	game_type: 'Darts',
	player_one: 'guest',
	player_two: 'Bullwinkle',
	author_id: 1,
	final_score: 301,
	player_one_score: 301,
	player_two_score: 177
);

Score.create!(
	game_type: 'Foosball',
	player_one: 'guest',
	player_two: 'Bobby',
	author_id: 1,
	final_score: 10,
	player_one_score: 2,
	player_two_score: 10
);

Score.create!(
	game_type: 'Foosball',
	player_one: 'guest',
	player_two: 'Bobby',
	author_id: 1,
	final_score: 10,
	player_one_score: 4,
	player_two_score: 10
);

Score.create!(
	game_type: 'Foosball',
	player_one: 'guest',
	player_two: 'Bobby',
	author_id: 1,
	final_score: 10,
	player_one_score: 6,
	player_two_score: 10
);

Score.create!(
	game_type: 'Foosball',
	player_one: 'guest',
	player_two: 'Bobby',
	author_id: 1,
	final_score: 10,
	player_one_score: 8,
	player_two_score: 10
);

Score.create!(
	game_type: 'Foosball',
	player_one: 'guest',
	player_two: 'Bobby',
	author_id: 1,
	final_score: 10,
	player_one_score: 10,
	player_two_score: 8
);
