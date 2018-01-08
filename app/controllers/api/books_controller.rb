class Api::BooksController < ApplicationController

  def index
    @books = Book.all.order(updated_at: :desc)
  end

  def show
    @book = Book.includes(:reviews).find(params[:id])
  end

  private

  def book_params
    params.require(:book).permit(:title, :author, :description)
  end

end
