class AddColumnsToScores < ActiveRecord::Migration[5.2]
  def change
    add_column :scores, :player_one_score, :integer, default: 0
    add_column :scores, :player_two_score, :integer, default: 0
  end
end
