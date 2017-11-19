class Turn < ApplicationRecord
  validates :restaurant, :number, presence: true
  belongs_to :Users
end
