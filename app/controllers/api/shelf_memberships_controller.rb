class Api::ShelfMembershipsController < ApplicationController

  def create
    @shelf_membership = ShelfMembership.new(shelf_membership_params)
    if @shelf_membership.save
    else
      render json: @shelf_membership.errors.full_messages, status: 422
    end
  end

  def destroy
    @shelf_membership = ShelfMembership.where(shelf_membership_params).first
    @shelf_membership.destroy
    render json: ['Successfully deleted membership'], status: 202
  end

  private

  def shelf_membership_params
    params.require(:shelf_membership).permit(:shelf_id, :book_id)
  end

end
