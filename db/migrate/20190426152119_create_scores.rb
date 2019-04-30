class CreateScores < ActiveRecord::Migration[5.2]
  def change
    create_table :scores do |t|
    	t.string :game_type, null: false
    	t.string :player_one
    	t.string :player_two
        t.integer :final_score, null: false
    	t.integer :author_id, null: false

    	t.timestamps
    end
    add_index :scores, :author_id
  end
end

