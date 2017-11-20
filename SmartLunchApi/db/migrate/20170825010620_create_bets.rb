class CreateBets < ActiveRecord::Migration[5.0]
  def change
    create_table :bets do |t|
      t.references :lottery, foreign_key: true
      t.references :user, foreign_key: true
      t.integer :num

      t.timestamps
    end
  end
end
