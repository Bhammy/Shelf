class Api::ShelfMembershipsController < ApplicationController

  def create
    @shelf_membership = ShelfMembership.new(shelf_membership_params)
    if @shelf_membership.save
      @bookshelf = @shelf_membership.shelf
      render "api/bookshelves/show"
    else
      render json: @shelf_membership.errors.full_messages, status: 422
    end
  end

  def destroy
    @shelf_membership = ShelfMembership.includes(:book).where(shelf_membership_params).first
    @shelf_membership.destroy
    @bookshelf = Bookshelf.find(@shelf_membership.shelf_id)
    render "api/bookshelves/show", status: 202;
  end

  private

  def shelf_membership_params
    params.require(:shelf_membership).permit(:shelf_id, :book_id)
  end

end
