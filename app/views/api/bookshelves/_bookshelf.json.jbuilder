json.extract! bookshelf, :id, :shelf_title, :user_id

json.books do
  json.array! bookshelf.books, partial: "api/books/book", as: :book
end
