class Api::BooksController < ApplicationController

  def index
    @books = Book.all.order(updated_at: :desc)
  end

  def search
    @books = Book.title_search(book_params[:search])
  end

  def show
    @book = Book.includes(:reviews).find(params[:id])
  end

  private

  def book_params
    params.require(:book).permit(:title, :author, :description, :search)
  end

end
