class HomeController < ApplicationController

  skip_before_action :verify_authenticity_token, only: [:subscribe]
  def index
  end

  def subscribe

    user = User.create(
                first_name: params[:first_name],
                last_name: params[:last_name],
                email: params[:email]
              )
    render json: user
  end

  def list
    users = User.all


    render json: users
  end
end
