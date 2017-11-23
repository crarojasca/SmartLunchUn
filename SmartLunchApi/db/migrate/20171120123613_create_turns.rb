class CreateTurns < ActiveRecord::Migration[5.0]
  def change
    create_table :turns do |t|
      t.string :restaurant
      t.integer :number
      t.integer :user_id

      t.timestamps
    end
  end
end
