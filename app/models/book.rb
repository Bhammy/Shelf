# == Schema Information
#
# Table name: books
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  author      :string           not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Book < ApplicationRecord
  validates :title, :author, presence: true

  has_many :shelf_memberships

  has_many :shelves,
    through: :shelf_memberships,
    source: :shelf

end