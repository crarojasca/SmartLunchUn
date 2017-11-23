class TurnSerializer < ActiveModel::Serializer
  attributes :id, :restaurant, :number, :user
end
