class CreateStandings < ActiveRecord::Migration[5.2]
  def change
    create_table :standings do |t|
    	t.string :game_type, null: false
    	t.string :player_one, null: false
    	t.string :player_two, null: false
    	t.integer :player_one_wins
    	t.integer :player_two_wins
    	t.integer :author_id, null: false

    	t.timestamps
    end
    add_index :standings, :author_id
  end
end
