# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "user1", password: "starwars")

Book.create(title:"The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams")
Book.create(title:"Perdido Street Station", author: "China Miéville")
Book.create(title:"1491: New Revelations of the Americas Before Columbus", author: "Charles C. Mann")
Book.create(title:"Persepolis: The Story of a Childhood", author: "Marjane Satrapi")
Book.create(title:"Foundation", author: "Isaac Asimov")
