# == Schema Information
#
# Table name: books
#
#  id                       :integer          not null, primary key
#  title                    :string           not null
#  author                   :string           not null
#  description              :string
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#  cover_image_file_name    :string
#  cover_image_content_type :string
#  cover_image_file_size    :integer
#  cover_image_updated_at   :datetime
#

class Book < ApplicationRecord
  validates :title, :author, presence: true

  has_attached_file :cover_image, default_url: "blank_cover.jpg"
  validates_attachment_content_type :cover_image, content_type: /\Aimage\/.*\Z/

  has_many :shelf_memberships

  has_many :reviews

  has_many :shelves,
    through: :shelf_memberships,
    source: :shelf

  def self.title_search(search)
    self.where('LOWER(title) LIKE LOWER(?)
      OR LOWER(author) LIKE LOWER(?)',
      "%#{search}%",
      "%#{search}%")
  end


end
