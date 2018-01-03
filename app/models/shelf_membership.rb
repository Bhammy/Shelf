# == Schema Information
#
# Table name: shelf_memberships
#
#  id         :integer          not null, primary key
#  shelf_id   :integer          not null
#  book_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ShelfMembership < ApplicationRecord
  validates :shelf_id, :book_id, presence: true
  validates_uniqueness_of :book_id, scope: :shelf_id

  belongs_to :shelf,
    class_name: :Bookshelf,
    foreign_key: :shelf_id

  belongs_to :book
end
