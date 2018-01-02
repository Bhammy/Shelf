class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render "static_pages/root.html"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = User.find_by(username: @user.username)
    @user.destroy!
    render "static_pages/root.html"
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
