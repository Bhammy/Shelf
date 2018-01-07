class Api::BooksController < ApplicationController

  def index
    @books = Book.all
  end

  def show
    @book = Book.includes(:reviews).find(params[:id])
  end

  private

  def book_params
    params.require(:book).permit(:title, :author, :description)
  end

end
