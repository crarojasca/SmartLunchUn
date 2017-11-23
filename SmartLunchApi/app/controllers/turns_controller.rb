class TurnsController < ApplicationController
  before_action :set_turn, only: [:show, :update, :destroy]
  before_action :authenticate_user!, only:[:index, :show, :create, :update, :destroy]

  # GET /turns
  def index
    if params.has_key?(:restaurant)
      @turns = Turn.where(restaurant: params[:restaurant])
      @turns = @turns.where("turns.user_id IS NOT NULL")
    else
      @turns = Turn.where(user_id: current_user.id)
    end

    render json: @turns
  end

  # GET /turns/1
  def show
    render json: @turn
  end

  # POST /turns
  def create

    actualTurn = Turn.where(restaurant: params[:restaurant]).last.number
    @turn = current_user.build_turn(:restaurant => params[:restaurant], :number => actualTurn+1)

    if @turn.save
    # if @user.build_turn(turn_params)
      render json: @turn, status: :created, location: @turn
    else
      render json: @turn.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /turns/1
  def update
    if @turn.update(turn_params)
      render json: @turn
    else
      render json: @turn.errors, status: :unprocessable_entity
    end
  end

  # DELETE /turns/1
  def destroy
    @turn.destroy
  end

  def information
    restaurants = [
      "Ciencias Económicas",
      "Ciencias Humanas",
      "Hemeroteca",
      "Matemáticas",
      "Odontología",
      "La Flecha",
      "Central",
      "Biología"
    ]
    @information = []
    restaurants.each do |restaurant|
       @information.append(restauranInfo(restaurant))
    end
    render json: @information
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_turn
      @turn = Turn.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def turn_params
      params.require(:turn).permit(:restaurant, :number, :user)
    end

    def restauranInfo(restaurant)
      @turns = Turn.where(restaurant: restaurant)
      @turns = @turns.where("turns.user_id IS NOT NULL").count
      return {
        :name => restaurant,
        :queue => @turns
      }
    end
end
