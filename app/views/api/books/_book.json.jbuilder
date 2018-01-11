json.extract! book, :id, :title, :author, :description, :tags
json.image_url asset_path(book.cover_image.url)
json.reviews book.reviews do |review|
  json.partial! "api/reviews/review", review: review
end
