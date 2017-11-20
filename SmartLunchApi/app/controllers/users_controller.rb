class UsersController < ApplicationController
  before_action :authenticate_user!, only:[:welcum, :show]

  def index
    @users = User.all.order_score
    render json: @users
  end



  def show
    @user = current_user
    render json: @user
  end


  def welcum
    @user= current_user
    render json:          
    { data:
            {
              message: "Welcum "+current_user.username
            }
          }
  end

end
