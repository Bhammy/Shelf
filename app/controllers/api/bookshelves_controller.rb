class Api::BookshelvesController < ApplicationController

  def index
    @bookshelves = User.find(params[:user_id]).bookshelves
  end

  def show
    @bookshelf = Bookshelf.find(params[:id])
  end

end
