class CreateBookshelves < ActiveRecord::Migration[5.1]
  def change
    drop_table :bookshelves do |t|
      t.string :shelf_title, null: false
      t.integer :user_id, null: false
    end

    create_table :bookshelves do |t|
      t.string :shelf_title, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :bookshelves, :user_id
  end
end
