# == Schema Information
#
# Table name: bookshelves
#
#  id          :integer          not null, primary key
#  shelf_title :string           not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bookshelf < ApplicationRecord
  validates :shelf_title, :user_id, presence: true

  belongs_to :user

  has_many :shelf_memberships,
    class_name: :ShelfMembership,
    foreign_key: :shelf_id

  has_many :books,
    through: :shelf_memberships,
    source: :book

end
