class CreateLotteries < ActiveRecord::Migration[5.0]
  def change
    create_table :lotteries do |t|
      t.integer :winner
      t.text :description

      t.timestamps
    end
  end
end
