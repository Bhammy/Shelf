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

  has_many :taggings,
    dependent: :destroy,
    inverse_of: :book

  has_many :tags,
    through: :taggings

  def self.title_search(search)
    self.left_outer_joins(:tags).where('LOWER(books.title) LIKE LOWER(?)
      OR LOWER(books.author) LIKE LOWER(?)
      OR LOWER(tags.name) LIKE LOWER(?)',
      "%#{search}%", "%#{search}%", "%#{search}%")
  end

  def tag_names=(tag_names)
    self.tags = tag_names.map do |tag_name|
      Tag.find_or_create_by(name: tag_name)
    end
  end


end
