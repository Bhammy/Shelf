class Api::BooksController < ApplicationController

  def index
    @books = Book.all.order(updated_at: :desc)
  end

  def update
    @book = Book.find(params[:id])
    if @book.update(book_params)
      render :show
    else
      render json: @book.errors.full_messages, status: 422
    end
  end

  def search
    @books = Book.title_search(book_params[:search])
  end

  def show
    @book = Book.includes(:reviews, :tags).find(params[:id])
  end

  private

  def book_params
    params.require(:book).permit(:title, :author, :description, :search, tag_names: [])
  end

end
