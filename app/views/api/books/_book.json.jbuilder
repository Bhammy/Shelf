json.extract! book, :id, :title, :author, :description, :reviews
json.image_url asset_path(book.cover_image.url)
