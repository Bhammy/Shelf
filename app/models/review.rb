# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  book_id    :integer          not null
#  user_id    :integer          not null
#  rating     :float
#  title      :string
#  body       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
  validates :book_id, :user_id, presence: true
  validates_uniqueness_of :book_id, scope: :user_id
  validate :review_title_and_body, :review_rating_or_text

  belongs_to :book

  belongs_to :user

  private

  def review_rating_or_text
    if (self.rating == nil) && (self.body == nil) && (self.title == nil)
      errors.add(:rating, "cannot be blank unless leaving a text review.")
    end
  end

  def review_title_and_body
    unless (self.body == nil) && (self.title == nil)
      if self.title == nil
        errors.add(:title, "cannot be blank.")
      elsif self.body == nil
        errors.add(:body, "cannot be blank.")
      end
    end
  end

end
