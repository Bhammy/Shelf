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

require 'test_helper'

class BookTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
