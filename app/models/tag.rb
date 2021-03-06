# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord
  validates :name, uniqueness: true

  has_many :taggings, dependent: :destroy, inverse_of: :tag
  has_many :books, through: :taggings

end
