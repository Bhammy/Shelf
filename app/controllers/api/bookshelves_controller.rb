class Api::BookshelvesController < ApplicationController

  def index
    @bookshelves = User.find(params[:user_id]).bookshelves
  end

  def show
    @bookshelf = Bookshelf.find(params[:id])
  end

  def create
    @bookshelf = Bookshelf.new(bookshelf_params)
    if @bookshelf.save
      render :show
    else
      render json: @bookshelf.errors.full_messages, status: 422
    end
  end

  def update
    @bookshelf = Bookshelf.find(params[:id])
    if @bookshelf.update(bookshelf_params)
      render :show
    else
      render json: @bookshelf.errors.full_messages, status: 422
    end
  end

  def destroy
    @bookshelf = Bookshelf.find(params[:id])
    @bookshelf.destroy!
    render :show
  end

  private

  def bookshelf_params
    params.require(:bookshelf).permit(:shelf_title, :user_id)
  end

end
