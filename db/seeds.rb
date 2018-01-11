# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Book.destroy_all

User.create(username: "user1", password: "starwars")

Book.create(title:"The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", cover_image: "https://s3.us-east-2.amazonaws.com/shelf-imgs/11.jpg", description: "Seconds before Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of The Hitchhiker’s Guide to the Galaxy who, for the last fifteen years, has been posing as an out-of-work actor.")

Book.create(title:"Perdido Street Station", author: "China Miéville", cover_image: "https://s3.us-east-2.amazonaws.com/shelf-imgs/perdido.jpg", description: "Beneath the towering bleached ribs of a dead, ancient beast lies the city of New Crobuzon, where the unsavory deal is stranger to no one--not even to Isaac, a gifted and eccentric scientist who has spent a lifetime quietly carrying out his unique research. ")

Book.create(title:"1491: New Revelations of the Americas Before Columbus", cover_image: "https://s3.us-east-2.amazonaws.com/shelf-imgs/1491.jpg", author: "Charles C. Mann", description: "A groundbreaking study that radically alters our understanding of the Americas before the arrival of the Europeans in 1492.
")
Book.create(title:"Persepolis: The Story of a Childhood", author: "Marjane Satrapi", cover_image: "https://s3.us-east-2.amazonaws.com/shelf-imgs/persepolis.jpg", description: "Wise, funny, and heartbreaking, Persepolis is Marjane Satrapi’s memoir of growing up in Iran during the Islamic Revolution.")

Book.create(title:"Foundation", author: "Isaac Asimov", cover_image: "https://s3.us-east-2.amazonaws.com/shelf-imgs/foundation.jpg", description: "For twelve thousand years the Galactic Empire has ruled supreme. Now it is dying. But only Hari Seldon, creator of the revolutionary science of psychohistory, can see into the future -- to a dark age of ignorance, barbarism, and warfare that will last thirty thousand years. To preserve knowledge and save mankind, Seldon gathers the best minds in the Empire -- both scientists and scholars -- and brings them to a bleak planet at the edge of the Galaxy to serve as a beacon of hope for a future generations. He calls his sanctuary the Foundation.
")

Book.create(title: "Destiny Disrupted", author: "Tamim Ansary", cover_image: "https://s3.us-east-2.amazonaws.com/shelf-imgs/ddisrupted.jpg", description: "In Destiny Disrupted, Tamim Ansary tells the rich story of world history as the Islamic world saw it, from the time of Mohammed to the fall of the Ottoman Empire and beyond. He clarifies why our civilizations grew up oblivious to each other, what happened when they intersected, and how the Islamic world was affected by its slow recognition that Europe—a place it long perceived as primitive and disorganized—had somehow hijacked destiny." )

Book.create(title: "The Lies of Locke Lamora", author: "Scott Lynch", cover_image: "https://s3.us-east-2.amazonaws.com/shelf-imgs/llamora.jpg", description: "In this stunning debut, author Scott Lynch delivers the wonderfully thrilling tale of an audacious criminal and his band of confidence tricksters. Set in a fantastic city pulsing with the lives of decadent nobles and daring thieves, here is a story of adventure, loyalty, and survival that is one part 'Robin Hood', one part Ocean's Eleven, and entirely enthralling...")

Book.create(title: "The Player of Games", author: "Iain M. Banks", cover_image: "https://s3.us-east-2.amazonaws.com/shelf-imgs/pgames.jpg", description: "The Culture--a humanoid/machine symbiotic society--has thrown up many great Game Players. One of the best is Jernau Morat Gurgeh, Player of Games, master of every board, computer and strategy. Bored with success, Gurgeh travels to the Empire of Azad, cruel & incredibly wealthy, to try their fabulous game, a game so complex, so like life itself, that the winner becomes emperor. Mocked, blackmailed, almost murdered, Gurgeh accepts the game and with it the challenge of his life, and very possibly his death.")

Book.create(title: "Red Mars", author: "Kim Stanley Robinson", cover_image: "https://s3.us-east-2.amazonaws.com/shelf-imgs/redmars.jpg", description: "For eons, sandstorms have swept the desolate landscape. For centuries, Mars has beckoned humans to conquer its hostile climate. Now, in 2026, a group of 100 colonists is about to fulfill that destiny.
Brilliantly imagined, breathtaking in scope & ingenuity, Red Mars is an epic scientific saga, chronicling the next step in evolution, creating a world in its entirety. It shows a future, with both glory & tarnish, that awes with complexity & inspires with vision. ")

Book.create(title: "Empires of the Word", author: "Nicholas Ostler", cover_image: "https://s3.us-east-2.amazonaws.com/shelf-imgs/empiresoftheword.jpg", description: "Nicholas Ostler's Empires of the Word is the first history of the world's great tongues, gloriously celebrating the wonder of words that binds communities together and makes possible both the living of a common history and the telling of it. From the uncanny resilience of Chinese through twenty centuries of invasions to the engaging self-regard of Greek and to the struggles that gave birth to the languages of modern Europe, these epic achievements and more are brilliantly explored, as are the fascinating failures of once 'universal' languages. A splendid, authoritative, and remarkable work, it demonstrates how the language history of the world eloquently reveals the real character of our planet's diverse peoples and prepares us for a linguistic future full of surprises. ")

Book.create(title: "The Unfolding of Language", author: "Guy Deustcher", cover_image: "https://s3.us-east-2.amazonaws.com/shelf-imgs/unfoldinglanguage.jpg", description: " 'Language is mankind's greatest invention-except, of course, that it was never invented.' So begins linguist Guy Deutscher's enthralling investigation into the genesis and evolution of language. If we started off with rudimentary utterances on the level of 'man throw spear,' how did we end up with sophisticated grammars, enormous vocabularies, and intricately nuanced degrees of meaning?" )

Book.create(title: "The Years of Rice and Salt", author: "Kim Stanley Robinson", cover_image: "https://s3.us-east-2.amazonaws.com/shelf-imgs/yearsofriceandsalt.jpg", description: "It is the fourteenth century and one of the most apocalyptic events in human history is set to occur - the coming of the Black Death. History teaches us that a third of Europe's population was destroyed. But what if? What if the plague killed 99 percent of the population instead? How would the world have changed? This is a look at the history that could have been: a history that stretches across centuries, a history that sees dynasties and nations rise and crumble, a history that spans horrible famine and magnificent innovation. These are the years of rice and salt. " )

Book.create(title: "Vanished Kingdoms", author: "Norman Davies", cover_image: "https://s3.us-east-2.amazonaws.com/shelf-imgs/vanishedkingdoms.jpg", description: "Europe's history is littered with kingdoms, duchies, empires and republics which have now disappeared but which were once fixtures on the map of their age - 'the Empire of Aragon' which once dominated the western Mediterranean; the Grand Duchy of Lithuania, for a time the largest country in Europe; the successive kingdoms (and one duchy) of Prussia, much of whose history is now half-remembered at best. This book shows the reader how to peer through the cracks of mainstream history writing and listen to the echoes of lost realms across the centuries.")

Book.create(title: "Dune", author: "Frank Herbert", cover_image: "https://s3.us-east-2.amazonaws.com/shelf-imgs/dune.jpg", description: "Set in the far future amidst a sprawling feudal interstellar empire where planetary dynasties are controlled by noble houses that owe an allegiance to the imperial House Corrino, Dune tells the story of young Paul Atreides (the heir apparent to Duke Leto Atreides and heir of House Atreides) as he and his family accept control of the desert planet Arrakis, the only source of the 'spice' melange, the most important and valuable substance in the cosmos. The story explores the complex, multi-layered interactions of politics, religion, ecology, technology, and human emotion as the forces of the empire confront each other for control of Arrakis.

Published in 1965, it won the Hugo Award in 1966 and the inaugural Nebula Award for Best Novel. Dune is frequently cited as the world's best-selling sf novel." )

Book.create(title: "Startide Rising", author: "David Brin", cover_image: "https://s3.us-east-2.amazonaws.com/shelf-imgs/startiderising.jpg", description: "David Brin's Uplift novels are among the most thrilling and extraordinary science fiction ever written. Sundiver, Startide Rising, and The Uplift War--a New York Times bestseller--together make up one of the most beloved sagas of all time. Brin's tales are set in a future universe in which no species can reach sentience without being 'uplifted' by a patron race. But the greatest mystery of all remains unsolved: who uplifted humankind?

The Terran exploration vessel Streaker has crashed in the uncharted water world of Kithrup, bearing one of the most important discoveries in galactic history. Below, a handful of her human and dolphin crew battles armed rebellion and a hostile planet to safeguard her secret--the fate of the Progenitors, the fabled First Race who seeded wisdom throughout the stars." )

Book.create(title: "The Color of Magic", author: "Terry Pratchett", cover_image: "https://s3.us-east-2.amazonaws.com/shelf-imgs/cmagic.jpg", description: "The Color of Magic is Terry Pratchett's maiden voyage through the now-legendary land of Discworld. This is where it all begins -- with the tourist Twoflower and his wizard guide, Rincewind.

On a world supported on the back of a giant turtle (sex unknown), a gleeful, explosive, wickedly eccentric expedition sets out. There's an avaricious but inept wizard, a naive tourist whose luggage moves on hundreds of dear little legs, dragons who only exist if you believe in them, and of course THE EDGE of the planet..." )



50.times do
  Book.create(title: Faker::Book.title, author: Faker::Book.author, description: Faker::Dune.quote)
end
