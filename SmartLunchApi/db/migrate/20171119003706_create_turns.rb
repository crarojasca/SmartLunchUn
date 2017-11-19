class CreateTurns < ActiveRecord::Migration[5.1]
  def change
    create_table :turns do |t|
      t.string :restaurant
      t.integer :number
      t.belongs_to :Users, foreign_key: true

      t.timestamps
    end
  end
end
