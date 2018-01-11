# == Schema Information
#
# Table name: taggings
#
#  id         :integer          not null, primary key
#  tag_id     :integer          not null
#  book_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tagging < ApplicationRecord
  validates :book, :tag, presence: true
  validates :tag_id, uniqueness: { scope: :book }

  belongs_to :book
  belongs_to :tag
end
