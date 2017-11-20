# This file 1 contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

lot= Lottery.create(winner: rand(0..100), description: '')
lot.save

lot= Lottery.create(winner: rand(0..100), description: '')
lot.save

lot= Lottery.create(winner: rand(0..100), description: '')
lot.save

lot= Lottery.create(winner: rand(0..100), description: '')
lot.save

u= User.create(email: "juasmartinezbel@unal.edu.co", username: "juasmartinezbel", password: "123456789", name: "Juan Sebastian", score: 10)
u.save

u= User.create(email: "juasjuas1@memes.com", username: "AlejandraDrispe", password: "123456789", name: "Alejandra Drispe", score: 2)
u.save

u= User.create(email: "juasjuas2@memes.com", username: "MiguelCharryKanes", password: "123456789", name: "Miguel Charry Kanes", score: 5)
u.save

u= User.create(email: "juasjuas3@memes.com", username: "AlexCospior", password: "123456789", name: "Alex Cospior")
u.save